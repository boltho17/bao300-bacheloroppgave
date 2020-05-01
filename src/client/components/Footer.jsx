import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="main-footer fixed-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>Info</h4>
                            <ul>
                                <li>Markedsplasss</li>
                                <li>Bli en selger</li>
                                <li>Kontoinformasjon</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Om oss</h4>
                            <ul>
                                <li>Om SocialCofee</li>
                                <li>Hvem er vi egentlig?</li>
                                <li>Kontakt oss</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Vilkår</h4>
                            <ul>
                                <li>Bruk av tejenesten</li>
                                <li>Selgers vilkår</li>
                                <li>Handels vilkår</li>
                            </ul>
                        </div>
                    </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} SocialCofee AS | All right reserved | Privacy policy | Terms of service
                    </p>
                </div>
                </div>
            </div>
        )
    }
}