import { } from 'react'

export default function Adspace() {

    return (
        <>
            <div className="container-fluid pt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src="images/acatoken-logo.png" className="adspace-cmpny-img" />
                                </div>
                                <div className="col-lg-8">
                                    <h3 className="text-nowrap h3-adspace">AdvancedCryptoAcademy</h3>
                                    <p className="pb-1">Amount Staked:</p>
                                    <h4 className="pb-2"> 20,000,000.00 SOSX</h4>
                                    <a href="https://acatoken.io/">
                                        <button type="button" className="btn btn-primary btn-lg">Visit
                                            Website</button></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src="images/boredpuma-logo.png" className="adspace-cmpny-img" />
                                </div>
                                <div className="col-lg-8">
                                    <h3 className="h3-adspace">Boredpuma</h3>
                                    <p className="pb-1">Amount Staked:</p>
                                    <h4 className="pb-2"> 20,000,000.00 SOSX</h4>
                                    <a href="https://boredpuma.io/">
                                        <button type="button" className="btn btn-primary btn-lg">Visit
                                            Website</button></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
