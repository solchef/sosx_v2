import { useMediaPredicate } from "react-media-hook";
import Masonry from 'react-masonry-css'
import { useState, memo, useCallback, useEffect } from 'react'


const initialImages = [
    "https://images.unsplash.com/photo-1533003505519-6a9b92ed4911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTE4MDA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1504883303951-581cbf120aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTIyOTY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1517328894681-0f5dfabd463c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2NDI3NTIzMDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
]

const ImageElement = memo(({ value }) => (
    <div style={{ borderRadius: '10px', margin: '5px' }}>
        <img src={value} style={{ width: '100%', borderRadius: '10px' }} />
    </div>
))
const Test = () => {
    const biggerThan1500 = useMediaPredicate("(min-width: 1500px)");
    const biggerThan1200 = useMediaPredicate("(min-width: 1200px)");
    const biggest1200 = useMediaPredicate("(max-width: 1200px)");
    const bet1200and1500 = useMediaPredicate("(min-width: 576px) and (max-width: 850px)");
    const biggest576 = useMediaPredicate(" (max-width: 576px)");
    const breakpointColumnsObj = {


        3000: 5,
        2250: 4,
        1850: 3,
        1500: 4,
        1450: 3,
        1150: 2,
        850: 1,
        768: 2,
        620: 1
    };
 /**
     * initialImages set at useState hooks, so you can manipulate as state hooks
     */
  const [images, setImages] = useState(initialImages)

  const handleImages = useCallback(() => setImages(prev => [...prev, ...initialImages]), [setImages])

  /**
   * this code is example of responsive column, how many columns will be rendered if width of screen reach a certain value
   */

  const settingColumns = useCallback(() => {
      if(window.innerWidth >= 1400) return 4
      if(window.innerWidth >= 800) return 3
      if(window.innerWidth >= 500) return 2
      return 1
  }, [])

  const [column, setColumn] = useState(() => settingColumns())

  useEffect(() => {
      window.addEventListener('resize', () => setColumn(() => settingColumns()))

      return window.removeEventListener('resize', () => setColumn(() => settingColumns()))
  }, [setColumn, settingColumns])

  /**
   * end of responsive column example
   */

    return (<>
 
    </>
    )
}

export default  memo(Test)
