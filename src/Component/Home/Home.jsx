import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Styles from './Home.module.css';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div dir={i18n.dir(i18n.language)}>
      <div className='position-relative'>
        <div className={Styles.layer}></div>


        
        <Carousel 
        controls={false}
        interval={1500}
        > 
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  src="https://as2.ftcdn.net/v2/jpg/01/36/40/63/1000_F_136406352_ti3nfF1Zs5iioMwB7QFoicmUXw4q4G7n.jpg"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  src="https://as2.ftcdn.net/v2/jpg/01/36/86/99/1000_F_136869973_nf2llNAYQcnsnqOFx0JXkMHxH9uXEbHs.jpg"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  src="https://as1.ftcdn.net/v2/jpg/01/37/14/18/1000_F_137141877_sGZV4s0SryGmrnfymp1qzt0xNLYfU3qC.jpg"
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  src="https://as2.ftcdn.net/v2/jpg/01/70/00/65/1000_F_170006526_B4foJEVWy2NwzAbQKURDrYN0ChCif3Gh.jpg"
                  alt="Slide 3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  height={600}
                  src="https://as2.ftcdn.net/v2/jpg/00/83/47/27/1000_F_83472728_qdJuM2x77LFSeuftZ515jLuijRyM5Yzm.jpg"
                  alt="Slide 3"
                />
              </Carousel.Item>
            </Carousel>
        <h1 className={Styles.welcome}>{t('welcome')}</h1>
        <h1 className={Styles.welcome2}>{t('welcome2')}</h1>
        <Link className={`${Styles.buttonHome}`} to="/service">{t('buttonHome')}</Link>

        <div>
          {/* <p className={Styles.contactHome} style={{ [isRTL ? 'left' : 'right']: '220px', [isRTL ? 'right' : 'left']: 'auto' }}>{t('Contact Us')}</p> */}
          {/* <div className={Styles.line} style={{ [isRTL ? 'left' : 'right']: '220px', [isRTL ? 'right' : 'left']: 'auto' }}></div> */}

          <div className={Styles.icons} style={{ [isRTL ? 'left' : 'right']: '200px', [isRTL ? 'right' : 'left']: 'auto' }}>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-solid fa-location-dot"></i>
              <i className="fa-solid fa-phone"></i>
          </div>
        </div>
      </div>

    
    <div className="d-flex justify-content-center">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              {t('elafrad')}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              {t('companies')}
            </button>
          </li>
        </ul>
      </div>
      <div className="thewholeCards">
      <div className="tab-content my-4" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className=" text-decoration-none text-black" to={"./recipeMedical"}>
                <div className={Styles.cardHome}>
                <i className="fa-solid fa-capsules mb-3 fs-2"></i>
                <h5 className="mt-2 text-center">{t('recipeMedical')}</h5>
                </div>
                </Link>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
                <div className={Styles.cardHome}>
                <i className="fa-solid fa-droplet mb-3 fs-2"></i>
                <h5 className="mt-2 text-center">{t('bloodAnalysis')}</h5>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className=" text-decoration-none text-black" to={'./homeVisit'}>
                <div className={Styles.cardHome}>
                <i className="fa-solid fa-home mb-3 fs-2"></i>
                  <h5 className="mt-2 text-center">{t('homeVisit')}</h5>
                </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
                <div className={Styles.cardHome}>
                <i className="fa-solid fa-location-dot mb-3 fs-2"></i>
                <h5 className="mt-2 text-center">{t('Branches')}</h5>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
                <div className={Styles.cardHome}>
                <i className="fa-solid fa-scroll mb-3 fs-2"></i>
                <h5 className="mt-2 text-center">{t('Insurances')}</h5>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className=" text-decoration-none text-black" to={'/doctor'}>
                <div className={Styles.cardHome}>
                <i className="fa-solid fa-phone mb-3 fs-2"></i>
                <h5 className="mt-2 text-center">{t('consultation')}</h5>
                </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
                <div className={Styles.cardHome}>
                <i className="fa-solid fa-syringe mb-3  fs-2"></i>
                <h5 className="mt-2 text-center">{t('Vaccinations')}</h5>
                </div>
              </div>
              
            </div>









           




          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <div className="container">


          <div className="row justify-content-center">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className="col-md-2 text-decoration-none text-black" to={'/foodAnalysis'}>

                <div className={Styles.cardHome}>
                <i className="fa-solid fa-apple-whole mb-3 fs-2"></i>
                <h3 className='mt-2 text-center'>{t('tahalilElgezaa')}</h3>
                  </div>
                </Link>  
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className="col-md-2 text-decoration-none text-black " to={'/waterAnalysis'}>

                <div className={Styles.cardHome}>
                <i className="fa-solid fa-hand-holding-medical fs-2 mb-3"></i>
                <h5 className="mt-2 text-center">{t('waterAnalysis')}</h5>
                </div>
                </Link>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
              <Link className="col-md-2 text-decoration-none text-black" to={'/pharmaAnalysis'}>
                <div className={Styles.cardHome}>
                <VaccinesIcon className='fs-2 mb-3' />
                <h5 className="mt-2 text-center">{t('pharmaAnalysis')}</h5>
                </div>
                </Link>
              </div>
            </div>




          </div>
        </div>
      </div>

      </div>

      <div className={Styles.clients}>
        <h2 className='py-4'>{t('araClients')}</h2>
        <div className="row">
          <div className="col-lg-6 col-md-12 gy-3">
            <div className={Styles.clientCard}>
              <i className="fa-solid fa-user fs-1 px-3"></i>
              <div className={Styles.clientOpinion}>
                <p className={Styles.name}>{t('torki')}</p>
                <p>{t('lorem')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 gy-3">
            <div className={Styles.clientCard}>
              <i className="fa-solid fa-user fs-1 px-3"></i>
              <div className={Styles.clientOpinion}>
                <p className={Styles.name}>{t('torki')}</p>
                <p>{t('lorem')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.tech}>
        <div className="row">
          <div className="col-md-4">
            <i className={`${Styles.icona} fa-solid fa-vial-virus py-5`}></i>
            <h3>{t('technical')}</h3>
            <p>{t('techLorem')}</p>
          </div>
          <div className="col-md-4">
            <i className={`${Styles.icona} fa-solid fa-vial-virus py-5`}></i>
            <h3>{t('technical')}</h3>
            <p>{t('techLorem')}</p>
          </div>
          <div className="col-md-4">
            <i className={`${Styles.icona} fa-solid fa-vial-virus py-5`}></i>
            <h3>{t('technical')}</h3>
            <p>{t('techLorem')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
