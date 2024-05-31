import { useState } from "react";

function Landing() {

    const [recipient, setRecipient] = useState('andrewclarker0524@outlook.com');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [sendEmail, setSendEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const content = `name: ${name}\nemail :${sendEmail}\nmessage : ${message}`
        const emailUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;

        window.location.href = emailUrl;
    };
    return (
        // < !--Hero Section, Background Image change in css-- >
        <>
            <body data-spy="scroll" data-target=".navbar" data-offset="51">
                {/* <!-- Navbar Start --> */}
                <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
                    <a href="" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 display-5 text-primary"><span className="text-primary">My&nbsp;</span>Portfolio</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav m-auto py-0">
                            <a href="#home" className="nav-item nav-link active">Home</a>
                            <a href="#about" className="nav-item nav-link">About</a>
                            <a href="#qualification" className="nav-item nav-link">Quality</a>
                            <a href="#skill" className="nav-item nav-link">Skill</a>
                            <a href="#service" className="nav-item nav-link">Service</a>
                            <a href="#portfolio" className="nav-item nav-link">Portfolio</a>
                            <a href="#contact" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </nav>
                {/* <!-- Navbar End --> */}

                {/* <!-- Header Start --> */}
                <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{ minHeight: "100vh" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                                <img className="img-fluid w-100 rounded-circle shadow-sm" src="" alt="" />
                            </div>
                            <div className="col-lg-7 text-center text-lg-left">
                                <h3 className="text-white font-weight-normal mb-3">I'm</h3>
                                <h1 className="display-3 text-primary mb-2">Andrew Clarker</h1>
                                <a href="/assets/CV.pdf" target="_blank" className="btn btn-outline-light mr-5">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Header End --> */}


                {/* <!-- About Start --> */}
                <div className="container-fluid py-5" id="about">
                    <div className="container">
                        <div className="position-relative d-flex align-items-center justify-content-center">
                            <h1 className="display-1 text-uppercase text-white">About</h1>
                            <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-5 pb-4 pb-lg-0">
                                <img className="img-fluid rounded w-100" src="" alt="" />
                            </div>
                            <div className="col-lg-7">
                                <h3 className="mb-4">Blockchain Developer</h3>
                                <p>
                                    Experienced Blockchain Developer with over 4 years of experience in
                                    designing and developing decentralized applications (dApps) on the Ethereum
                                    blockchain.
                                    Skilled in implementing smart contracts using Solidity and
                                    collaborating with cross-functional teams to integrate blockchain solutions.
                                    Strong expertise in developing front-runner trading bots, payment gateways,
                                    and decentralized marketplace platforms.
                                    Proficient in Go, JavaScript, Solidity, Ethereum, and other blockchain technologies.
                                    Seeking a Blockchain Developer position to leverage skills in DeFi Protocols and
                                    Solidity to support innovative solutions at a dynamic company.
                                </p>
                                <div className="row mb-3">
                                    <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Andrew Clarker</span></h6></div>
                                    <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">24 May 1995</span></h6></div>
                                    <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Master</span></h6></div>
                                    <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">8 Years</span></h6></div>
                                    <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">andrewclarker0524@outlook.com</span></h6></div>
                                    <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">1720 Edgewood Ave S Jacksonville, FL 32205</span></h6></div>
                                    <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- About End --> */}


                {/* <!-- Qualification Start --> */}
                <div className="container-fluid py-5" id="qualification">
                    <div className="container">
                        <div className="position-relative d-flex align-items-center justify-content-center">
                            <h1 className="display-1 text-uppercase text-white"
                            //
                            //  style="-webkit-text-stroke: 1px #dee2e6;"

                            >
                                Quality</h1>
                            <h1 className="position-absolute text-uppercase text-primary">Education & Expericence</h1>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h3 className="mb-4">My Education</h3>
                                <div className="border-left border-primary pt-2 pl-4 ml-2">
                                    <div className="position-relative mb-4">
                                        <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                        <h5 className="font-weight-bold mb-1">Bachelor's Degree in Computer Science</h5>
                                        <p className="mb-2"><strong>Saint Mary's University</strong> | <small>02/2013 - 07/2017</small></p>
                                        <p>
                                            From 2013 to 2017, I attended Saint Mary's College, where I immersed myself in a diverse range of courses and extracurricular activities. Throughout my time there, I prioritized academic excellence, personal growth, and community involvement, graduating in 2017 with cherished memories and valuable experiences to carry forward in life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3 className="mb-4">My Expericence</h3>
                                <div className="border-left border-primary pt-2 pl-4 ml-2">
                                    <div className="position-relative mb-4">
                                        <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                        <h5 className="font-weight-bold mb-1">Blockchain Developer</h5>
                                        <p className="mb-2"><strong>Blockchain Innovations Corp.</strong> | <small>05/2022 - present</small></p>
                                        <p>Enhanced investor's portfolio by 20% by developing a leading trading bot using Solidity and Node.js.</p>
                                        <p>Led five Self-Sovereign Identity projects, culminating in the design of a groundbreaking new product.</p>
                                        <p>Enabled transactions worth over $500k monthly by integrating a payment gateway with the Ethereum network.</p>
                                    </div>
                                    <div className="position-relative mb-4">
                                        <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                        <h5 className="font-weight-bold mb-1">Freelance Blockchain Developer</h5>
                                        <p className="mb-2"><strong>Ethereum Experts Group</strong> | <small>02/2018 - 05/2022</small></p>
                                        <p>Developed a front-runner trading bot for a private investor with Solidity and Node.js.</p>
                                        <p>Handled different SSI projects and helped design a new product from the beginning.</p>
                                        <p>Constructed a payment gateway to integrate an existing payment platform with the Ethereum network.</p>
                                    </div>
                                    <div className="position-relative mb-4">
                                        <i className="far fa-dot-circle text-primary position-absolute" style={{ top: "2px", left: "-32px" }}></i>
                                        <h5 className="font-weight-bold mb-1">Blockchain Intern</h5>
                                        <p className="mb-2"><strong>Hyperledger Solutions Group</strong> | <small>03/2017 - 02/2018</small></p>
                                        <p>Assisted in the development and testing of a blockchain-based supply chain management system</p>
                                        <p>Gained experience in implementing blockchain consensus mechanisms and designing secure blockchain architectures</p>
                                        <p>Participated in the creation and deployment of smart contracts on the Hyperledger Fabric platform</p>
                                        <p>Collaborated with the team to identify and address technical challenges and optimize blockchain performance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Qualification End --> */}


                {/* <!-- Skill Start --> */}
                <div className="container-fluid py-5" id="skill">
                    <div className="container">
                        <div className="position-relative d-flex align-items-center justify-content-center">
                            <h1 className="display-1 text-uppercase text-white"
                            //  style=""
                            >Skills</h1>
                            <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">Blockchain</h6>
                                        {/* <h6 className="font-weight-bold">95%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">Go</h6>
                                        {/* <h6 className="font-weight-bold">85%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">JavaScript</h6>
                                        {/* <h6 className="font-weight-bold">90%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">Solidity</h6>
                                        {/* <h6 className="font-weight-bold">90%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">Solana</h6>
                                        {/* <h6 className="font-weight-bold">95%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">Ethereum</h6>
                                        {/* <h6 className="font-weight-bold">85%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">Cryptography</h6>
                                        {/* <h6 className="font-weight-bold">90%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">Smart Contracts</h6>
                                        {/* <h6 className="font-weight-bold">95%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">Data Structures</h6>
                                        {/* <h6 className="font-weight-bold">85%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">React</h6>
                                        {/* <h6 className="font-weight-bold">90%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">node.js</h6>
                                        {/* <h6 className="font-weight-bold">95%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">Python</h6>
                                        {/* <h6 className="font-weight-bold">90%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">Rust</h6>
                                        {/* <h6 className="font-weight-bold">95%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">MongoDB</h6>
                                        {/* <h6 className="font-weight-bold">90%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="font-weight-bold">Typescript</h6>
                                        {/* <h6 className="font-weight-bold">95%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Skill End --> */}


                {/* <!-- Strength Start --> */}
                <div className="container-fluid pt-5" id="service">
                    <div className="container">
                        <div className="position-relative d-flex align-items-center justify-content-center">
                            <h1 className="display-1 text-uppercase text-white"
                            //  style="-webkit-text-stroke: 1px #dee2e6;"
                            >Strength</h1>
                            <h1 className="position-absolute text-uppercase text-primary">My Strengths</h1>
                        </div>
                        <div className="row pb-3">
                            <div className="col-lg-4 col-md-6 text-center mb-5">
                                <div className="d-flex align-items-center justify-content-center mb-4">
                                    <i className="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"></i>
                                    <h4 className="font-weight-bold m-0">Passion for Innovation</h4>
                                </div>
                                <p>Dedicated to staying updated with the latest trends and technologies in the blockchain industry.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center mb-5">
                                <div className="d-flex align-items-center justify-content-center mb-4">
                                    <i className="fab fa-2x fa-android service-icon bg-primary text-white mr-3"></i>
                                    <h4 className="font-weight-bold m-0">Collaboration</h4>
                                </div>
                                <p>Skilled in working collaboratively in cross-functional teams and communicating technical concepts efficiently.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center mb-5">
                                <div className="d-flex align-items-center justify-content-center mb-4">
                                    <i className="fa fa-2x fa-search service-icon bg-primary text-white mr-3"></i>
                                    <h4 className="font-weight-bold m-0">Problem-Solving Skills</h4>
                                </div>
                                <p>Ability to tackle complex blockchain-related challenges with analytical thinking and creativity.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Strength End --> */}


                {/* <!-- Portfolio Start --> */}
                <div className="container-fluid pt-5 pb-3" id="portfolio">
                    <div className="container">
                        <div className="position-relative d-flex align-items-center justify-content-center">
                            <h1 className="display-1 text-uppercase text-white"
                            //  style="-webkit-text-stroke: 1px #dee2e6;"
                            >Gallery</h1>
                            <h1 className="position-absolute text-uppercase text-primary">My Portfolio</h1>
                        </div>
                        <div className="row portfolio-container">
                            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                                <div className="position-relative overflow-hidden mb-2" style={{ height: "260px" }}>
                                    <img className="img-fluid rounded w-100 h-100" src="../../assets/img/portfolio-1.webp" alt="" />
                                    <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                        <a href="https://dinisium.com/" target="_blank">
                                            <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                                <div className="position-relative overflow-hidden mb-2" style={{ height: "260px" }}>
                                    <img className="img-fluid rounded w-100 h-100" src="../../assets/img/solana.webp" alt="" />
                                    <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                        <a href="https://www.lapa.ninja/post/solana/" target="_blank">
                                            <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                                <div className="position-relative overflow-hidden mb-2" style={{ height: "260px" }}>
                                    <img className="img-fluid rounded w-100 h-100" src="../../assets/img/portfolio-3.png" alt="" />
                                    <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                        <a href="https://flippa.com/" target="_blank">
                                            <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                                <div className="position-relative overflow-hidden mb-2" style={{ height: "260px" }}>
                                    <img className="img-fluid rounded w-100 h-100" src="../../assets/img/vaiot.webp" alt="" />
                                    <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                        <a href="https://www.lapa.ninja/post/vaiot/" target="_blank">
                                            <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                                <div className="position-relative overflow-hidden mb-2" style={{ height: "260px" }}>
                                    <img className="img-fluid rounded w-100 h-100" src="../../assets/img/CoTrader.webp" alt="" />
                                    <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                        <a href="https://cotrader.com/?ref=lapaninja" target="_blank">
                                            <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                                <div className="position-relative overflow-hidden mb-2" style={{ height: "260px" }}>
                                    <img className="img-fluid rounded w-100 h-100" src="../../assets/img/AirMining.webp" alt="" />
                                    <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                        <a href="https://www.lapa.ninja/post/airmining/">
                                            <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio End --> */}

                {/* <!-- Contact Start --> */}
                <div className="container-fluid py-5" id="contact">
                    <div className="container">
                        <div className="position-relative d-flex align-items-center justify-content-center">
                            <h1 className="display-1 text-uppercase text-white">Contact</h1>
                            <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-form text-center">
                                    <div id="success"></div>
                                    <form onSubmit={handleSubmit} noValidate="novalidate" >
                                        <div className="form-row">
                                            <div className="control-group col-sm-6">
                                                <input type="text" className="form-control p-4" id="name" placeholder="Your Name"
                                                    required="required" data-validation-required-message="Please enter your name" onChange={(e) => { setName(e.target.value) }} />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="control-group col-sm-6">
                                                <input type="email" className="form-control p-4" id="email" placeholder="Your Email"
                                                    required="required" data-validation-required-message="Please enter your email" onChange={(e) => { setSendEmail(e.target.value) }} />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <input type="text" className="form-control p-4" id="subject" placeholder="Subject"
                                                required="required" data-validation-required-message="Please enter a subject" value={subject}
                                                onChange={(e) => setSubject(e.target.value)} />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="control-group">
                                            <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                                required="required"
                                                data-validation-required-message="Please enter your message" value={message}
                                                onChange={(e) => setMessage(e.target.value)}></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div>
                                            <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Send
                                                Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Contact End --> */}

                {/* <!-- Scroll to Bottom --> */}
                <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>

                {/* <!-- Back to Top --> */}
                <a href="#" className="btn btn-outline-dark px-0 back-to-top"><i className="fa fa-angle-double-up"></i></a>
            </body >
        </>
    );
}

export default Landing;
