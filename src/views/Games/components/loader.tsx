import { Box, Button, Flex, Heading, ProposalIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import Link from 'next/link'
import DesktopImage from './DesktopImage'
import Masonry from "react-masonry-css";
import { cleanNumber } from 'utils/amount'
import { useState } from 'react'
import { useMediaPredicate } from 'react-media-hook'
import { Skeleton } from "../../../../packages/uikit/src/components/Skeleton";



const LoaderDisplay = (props) => {
  const { t } = useTranslation()

  const [displayLevel, setDisplayLevel] = useState(1);
  const biggerThan1500 = useMediaPredicate("(min-width: 1500px)");

  return (
   
                <div className="col-12 col-xl-4 col-md-6">
                {/* @ts-ignore */}
                <Skeleton className="mb-2" width={"60%"} />
                {/* @ts-ignore */}
                <Skeleton className="mb-2" width={"100%"} />
                {/* @ts-ignore */}
                <Skeleton className="mb-2" width={"50%"} />
                {/* @ts-ignore */}
                <Skeleton  className="mb-2"  width={"80%"} height={100} />
                {/* @ts-ignore */}
                <Skeleton className="mb-2" width={"80%"} />
            </div>
  
    )
}

export default LoaderDisplay
