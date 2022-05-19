import { useMediaPredicate } from "react-media-hook";

export default function Test() {
    const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
    const biggest1400 = useMediaPredicate("(max-width: 1400px)");
    return (
    
        <div className={`${biggerThan1400 && "container"}  pt-3 ${biggest1400 && "container-fluid"}`} >

          <div style={{marginTop: '12rem'}} className="card p-3">
            <div className="row">
             
                <span className="fs-20 mx-auto main-pink">
                    THE MESSAGE
                </span>
             
            </div>
          </div>

      </div>
    )
}