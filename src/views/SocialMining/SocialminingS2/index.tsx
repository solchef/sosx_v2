import Link from 'next/link';
import NavMining from '../NavMining';
import { useState,useRef } from 'react'
import { InlineShareButtons } from 'sharethis-reactjs';
import {Popover, Overlay,Button,Tooltip } from 'react-bootstrap';
import { useMediaPredicate } from "react-media-hook";
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import ConnectWalletButton from '../../../components/ConnectWalletButton'

export default function SocialminingS2(props) {
	const [copySuccess, setCopySuccess] = useState('');
	const {account} = useActiveWeb3React();
	const [show, setShow] = useState(false);
	const target = useRef(null);
	console.log(account)
 
    const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
	const biggest1400 = useMediaPredicate("(max-width: 1400px)");

  return (

    <div className={`${biggerThan1400 && "container"} pt-3 ${biggest1400 && "container-fluid"}`} >
		<Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
			
            style={{
				width:'250px',
              position: 'absolute',
              backgroundColor: '#24292d',
              padding: '0px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
         
		 <InlineShareButtons 
		
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'cta',        // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
			'whatsapp',
			'linkedin',
			'messenger',
			'facebook',
			'twitter'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: false,
            size: 40,             // the size of each button (INTEGER)
 
            // OPTIONAL PARAMETERS
            url: 'https://www.sharethis.com', // (defaults to current url)
            image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'custom text',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)
          }}
        />
          </div>
        )}
      </Overlay>

			<NavMining />






			<div className="card-social container-fluid pt-3 pb-0">


				<div className="row pt-3">
					<div className="col-sm-12">
						<h3 className="h3-mobile text-center">TELL AT LEAST ONE PERSON EVERYDAY ABOUT SOCIALX.</h3>
					</div>
				</div>

				<div className="card p-3 mt-3">
					<div className="row">
						<div className="col-lg-6">
							<div className="card-header border-0">
								<h3 className='font-weight-bold'>MY REFERRAL LINK</h3>
								<span className="text-success"> {copySuccess}</span>
							</div>
							<div className="card-body">
							
								<div className="bg-dark p-0  rounded">
								{account ? (
									<div className="d-flex p-2 justify-content-between align-items-center">
										<p className='fs-14'>https://socialx.io?ref={account.slice(0, 23)}...</p>
										{console.log(account)}
										<div className="float-right d-flex">
											<li onClick={() => {
												navigator.clipboard.writeText(`https://socialx.io?ref=${account}`)
												setCopySuccess('Copied!')

											}} className="nav-item pr-2">
												<a  href="#" className="nav-link" data-toggle="modal">
													<i className="fa-regular fa-clone"></i></a>
											</li>
											<li ref={target} onClick={() => setShow(!show)} className="nav-item "><a href="#" className="nav-link" data-toggle="modal">
												<i className="fa-solid fa-share-from-square"></i></a></li>
										
										</div>
									</div>
									):(<p>** CONNECT TO REFER **</p>)}
								</div>
							
								<div className="bg-dark rounded">
									<span className='font-weight-bold'>You will get</span>
									<div className='d-flex justify-content-between'>
										<div>
											<p className='pt-2 font-weight-bold'>Social Mining</p>
											<h3 className='font-weight-bold pt-2' > 25%</h3>
										</div>
											<div>
											<p className='pt-2 font-weight-bold'>Staking </p>
										<h3 className='font-weight-bold pt-2' > 10%</h3>
											</div>
										
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 pl-3 pt-3">
							<p className="fs-22 main-pink">5 MINS A DAY + 30 DAYS =
								1000X PROFITS!</p>
							<p className="text-white pt-2 fs-16 pr-3 mb-3">
								If one individual attempts to recruit a minimum of one person a day,
								that person commits to the same experiment; we have calculated that a
								single identity can be the connection between 536,870,912 individuals
								and SocialX. Let us imagine a scenario where each associate purchased
								a simple dollar worth or SocialX Token; we would be looking at a market c
								ap equal to $536,870,912.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid">
				<div className="row text-center">
					<div className="col-md-12">
						<Link href="/socialmining-s1">

							<a>
								<button className="btn btn-outline-primary mr-2 mb-3">Back</button>
							</a>
						</Link>
						{account ? (
						<Link href="/socialmining-s3">

							<a>
								<button className="btn btn-primary mr-3 mb-3">Continue</button>
							</a>
						</Link>
						):(
							<ConnectWalletButton className="btn btn-primary mr-3 mb-3 "/>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
