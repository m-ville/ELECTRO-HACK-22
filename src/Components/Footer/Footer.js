import React from 'react'
import logo from './faces_logo.png'
import './FooterStyle.css'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBTextArea
} from 'mdb-react-ui-kit';


const Q_Links = [
  {
    key: '1',
    href: '#!',
    text: 'Home'
  },
  {
    key: '2',
    href: '#!',
    text: 'Gallary'
  },
  {
    key: '3',
    href: '#!',
    text: 'Events'
  },
  {
    key: '4',
    href: '#!',
    text: 'Team'
  },
  {
    key: '5',
    href: 'https://nitjsr.ac.in',
    text: 'NIT Official Site'
  },

]

const S_Links = [
  {
    key: '1',
    href: '#!',
    iconName: 'facebook-f'
  },
  {
    key: '1',
    href: '#!',
    iconName: 'instagram'
  },
  {
    key: '1',
    href: '#!',
    iconName: 'linkedin-in'
  },
  {
    key: '1',
    href: '#!',
    iconName: 'youtube'
  },
]

function Footer() {
  return (
    <>
      {/* <div class="custom-shape-divider-top-1667488237">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div> */}

      <MDBFooter className='text-white text-center text-md-start footer_container'>
        <MDBContainer className='p-1 '>
          <MDBRow>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 faces_social'>
              <ul className='list-unstyled mb-0 text-center'>
                <li> <img src={logo} alt='faces Logo'></img> </li>
                <li>
                  <a href="mailto:faces@nitjsr.ac.in" className='text-white ' >faces@nitjsr.ac.in</a>
                </li>
                <li className='faces_mail'>
                  {S_Links.map((eachIcon) =>
                    <MDBBtn color="light" floating className='m-2' href={eachIcon.href} role='button'>
                      <MDBIcon size='lg' fab icon={eachIcon.iconName} />
                    </MDBBtn>
                  )}
                </li>
              </ul>
            </MDBCol>



            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 quick_links'>
              <ul className='list-unstyled'>
                <li> <h3 className='text mb-0'>Quick Links</h3> </li>

                {Q_Links.map((eachLink) =>
                  <li>
                    <a href={eachLink.href} className='text-white'>{eachLink.text}</a>
                  </li>
                )}
              </ul>
            </MDBCol>



            <MDBCol lg='4' md='12' className='mb-4 mb-md-0 contact_us'>
              <h3 className='text mb-0'>Contact Us</h3>

              <form class='md-form' action=''>
                <MDBInput label='Name' id='typeText' type='text' contrast />
                <MDBInput label='Email' id='typeEmail' type='email' contrast />
                <MDBTextArea label='Message' id='textAreaExample' rows={3} contrast />
                <MDBBtn color='light' id='submitBtn' type='submit' rippleColor='dark'  >Contact Us</MDBBtn>
              </form>

            </MDBCol>
            
          </MDBRow>
        </MDBContainer>

        {/* <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div> */}
        {/* <div className='text-center p-1'>
        <p>All artworks are owned by their respective artists. For any queries/complaints contact fasmesra@gmail.com</p>
      </div> */}
      </MDBFooter>
    </>
  )
}

export default Footer