
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import "./Slider.css";
export const ReactCurousel = () => {
  
  const SubMain = styled(Carousel)`
    & .carousel-control-prev-icon,
    .carousel-control-next-icon {
      padding: 10%;
      border-radius: 50%;
      background-color: black;
    }
  `
  
  return (
    <div className="img_card">
      <h3>Today's Hot picks</h3>
      <SubMain >
      

        <Carousel.Item interval={1500}>
        <div style={{height:"280px",width:"100%",color:"white",display:"flex" }} className="paru">
        
            
<div ><img  src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/Undekhi_S2_1_Master_portrait_thumb.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/Salute_New_No2_Master_portrait_thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/RockeyBoys_3_Master_portrait_thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/DYG_4_Master_portrait_thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/Gullak_S2_5_Master_portrait_thumb.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Scam_No6_Master_portrait_thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/KV_7_Master_portrait_thumb.jpg" alt="" /></div>
          </div>
        </Carousel.Item>



        <Carousel.Item interval={1500}>
        <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
            
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Maharani_No8_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/YourHonor_No9_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/Tabbar_No10_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/KV_7_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/DYG_4_Master_portrait_thumb.jpg" alt="" /></div>

          </div>
        </Carousel.Item>
        
      </SubMain>
      <br />
      <h3>Watch in your language</h3>
      <SubMain >
     

        <Carousel.Item interval={1500}>
        <div style={{height:"187px",width:"100%",color:"white",display:"flex"}} className="paru lang">
            
<div ><img  src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Tamil_lang_1x1.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Telugu_lang_1x1.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/malayalam_lang_square_imageNEW.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Marathi_lang_1x1.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Hindi_lang_1x1.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Eng_lang_1x1.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/bangla_lang_1x1.jpg" alt="" /></div>
          </div>
        </Carousel.Item>



        <Carousel.Item interval={1500}>
        <div style={{height:"187px",width:"100%",color:"white",display:"flex"}} className="paru lang">
            
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/kannada_rev22_squre_thumbnail.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/YourHonor_No9_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/Tabbar_No10_Master_portrait_thumb.jpg" alt="" /></div>
{/* <div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/KV_7_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/DYG_4_Master_portrait_thumb.jpg" alt="" /></div> */}

          </div>
        </Carousel.Item>
      </SubMain>
      <br />
      <div class="img-middle">
        <img width="100%" src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_170,q_auto:low,w_1259/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/James_hindi_dated_web.png" alt=""/>
    </div>
    <br />
      <h3>New on Liv</h3>
      <SubMain >
      


        <Carousel.Item interval={1500}>
        <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
            
<div ><img  src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Salute_hindi_portraitThumbnails.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/KadaisiVivasayi_Portrait_Thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/FantasyIsland_Set2_Portrait_Thumb_Binge.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/BAFTA_LIFE_IN_PICTURES_portrait_thumb_new_show_rev.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/No_Parking_Mobile_Portrait_Thumb.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Matichya_Chuli_NewShow_Portrait_Thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Undekhi_B_Portrait_Thumb_Lang1.jpg" alt="" /></div>
          </div>
        </Carousel.Item>



        <Carousel.Item interval={1500}>
        <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
            
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/kannada_rev22_squre_thumbnail.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/YourHonor_No9_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/Tabbar_No10_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/CLAP1Tel_Portrait_Thumb.jpg" alt="" /></div> <div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Salute_malayalam_text_portraitThumbnails.jpg" alt="" /></div>
       <div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Ajagantram_Portrait_Thumb_10march.jpg" alt="" /></div>     
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/RocketBoys2_Portrait_Thumb6.jpg" alt="" /></div>
          </div>
        </Carousel.Item>
      </SubMain>
      <br />
      <h3>Premium preview-Originals</h3>

      <SubMain >


        <Carousel.Item interval={1500}>
        <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
            
<div ><img  src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/KadaisiVivasayi_Portrait_Thumb.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Salute_tamil_1_portraitThumbnails.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Enemy3_Portrait_Thumb7a.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/CLAP1Tam_Portrait_Thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/RocketBoysMain_Portrait_Thumb_tamil.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Maanaadu_2_Portrait_Thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Maharani6_Portrait_Thumb_Review_Lang1.jpg" alt="" /></div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
        <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
            
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Bachelor2_Portrait_Thumb_Lang.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/YourHonor_No9_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/Tabbar_No10_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/CLAP1Tel_Portrait_Thumb.jpg" alt="" /></div> <div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Salute_malayalam_text_portraitThumbnails.jpg" alt="" /></div>
       <div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Ajagantram_Portrait_Thumb_10march.jpg" alt="" /></div>     
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/RocketBoys2_Portrait_Thumb6.jpg" alt="" /></div>
          </div>
        </Carousel.Item>

        
      </SubMain>
      <br />
      <div class="img-middle">
        <img width="100%" src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_170,q_auto:low,w_1259/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/TVFGullakS3_Web_1259x170_WT_Dated.png" alt=""/>
    </div>
    <br />
      <h3>LIV Originals</h3>
      <SubMain >
     

        <Carousel.Item interval={1500}>
        <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
            
<div ><img  src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_398,q_auto:low,w_708/e_brightness:10/https://origin-staticv2.sonyliv.com/landscape_thumb/UndekhiS2-1_first_episode1.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_398,q_auto:low,w_708/e_brightness:10/https://origin-staticv2.sonyliv.com/landscape_thumb/RocketBoys1_first_episode1.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_398,q_auto:low,w_708/e_brightness:10/https://origin-staticv2.sonyliv.com/landscape_thumb/TabbarFrame_first_episode1.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_398,q_auto:low,w_708/e_brightness:10/https://origin-staticv2.sonyliv.com/landscape_thumb/TheWhistlerblowerReview_first_episode1.jpg" alt="" /></div>
{/* <div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/No_Parking_Mobile_Portrait_Thumb.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Matichya_Chuli_NewShow_Portrait_Thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Undekhi_B_Portrait_Thumb_Lang1.jpg" alt="" /></div> */}
          </div>
        </Carousel.Item>



        <Carousel.Item interval={1500}>
        <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
            
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_398,q_auto:low,w_708/e_brightness:10/https://origin-staticv2.sonyliv.com/landscape_thumb/Undekhi_14may_free_episode.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_398,q_auto:low,w_708/e_brightness:10/https://origin-staticv2.sonyliv.com/landscape_thumb/scam_14may_free_episode.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_398,q_auto:low,w_708/e_brightness:10/https://origin-staticv2.sonyliv.com/landscape_thumb/Maharani_free_ep_landscape_thumb.jpg" alt="" /></div>
{/* <div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/CLAP1Tel_Portrait_Thumb.jpg" alt="" /></div> <div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Salute_malayalam_text_portraitThumbnails.jpg" alt="" /></div> */}
       <div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_398,q_auto:low,w_708/e_brightness:10/https://origin-staticv2.sonyliv.com/landscape_thumb/avrodh_free_14may_episode.jpg" alt="" /></div>     
{/* <div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/RocketBoys2_Portrait_Thumb6.jpg" alt="" /></div> */}
          </div>
        </Carousel.Item>
      </SubMain>
      <br />
      <h3>Latest Episodes</h3>
      <SubMain >
      

<Carousel.Item interval={1500}>
<div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
    
<div ><img  src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/IndiasGotTalent1_Portrait_Thumb.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/TKSS_2021_1_Portrait_Thumb_100Pipers.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/DYG1_Portrait_Thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/CP_Portrait_Thumb_rev.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/TMKOC_Portrait_Thumb_080322.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/6134492789001.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/BALH_S2_Portrait_Thumb.jpg" alt="" /></div>
  </div>
</Carousel.Item>



<Carousel.Item interval={1500}>
<div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
    
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/IndianIdolMarathi_Portrait_Thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/WaglekiDuniya_Portrait_Thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/PunyashlokAhilyabai2_Portrait_Thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Kaamna_Portrait_Thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Ajagantram_Portrait_Thumb_10march.jpg" alt="" /></div>     
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/RocketBoys2_Portrait_Thumb6.jpg" alt="" /></div>
  </div>
</Carousel.Item>
</SubMain>
<br />
<div class="img-middle">
        <img width="100%" src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_170,q_auto:low,w_1259/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/Salute_hindi_rev_Web_1259x170.png" alt=""/>
    </div>
    <br />
      <h3>Evergreen Classics</h3>
      <SubMain >

        <Carousel.Item interval={1500}>
        <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
            
<div ><img  src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Salute_hindi_portraitThumbnails.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/KadaisiVivasayi_Portrait_Thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/FantasyIsland_Set2_Portrait_Thumb_Binge.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/BAFTA_LIFE_IN_PICTURES_portrait_thumb_new_show_rev.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/No_Parking_Mobile_Portrait_Thumb.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Matichya_Chuli_NewShow_Portrait_Thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Undekhi_B_Portrait_Thumb_Lang1.jpg" alt="" /></div>
          </div>
        </Carousel.Item>



        <Carousel.Item interval={1500}>
        <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
            
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_344,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/kannada_rev22_squre_thumbnail.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/YourHonor_No9_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/Tabbar_No10_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/CLAP1Tel_Portrait_Thumb.jpg" alt="" /></div> <div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Salute_malayalam_text_portraitThumbnails.jpg" alt="" /></div>
       <div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Ajagantram_Portrait_Thumb_10march.jpg" alt="" /></div>     
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/RocketBoys2_Portrait_Thumb6.jpg" alt="" /></div>
          </div>
        </Carousel.Item>
      </SubMain>
      <br />
<h3>Best Of Hollywoods</h3>
<SubMain >

    <Carousel.Item interval={1500}>
    <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
        
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Guru_Aur_Bhole_portrait_thumb_multilang.jpg"  /></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/TenaliRama_251121_Portrait_Thumb.jpg" /></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Kuch-Toh-Log-Kahenge1_Portrait_Thumb.jpg" /></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/4682167188001.jpg" /></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Adaalat1_Portrait_Thumb.jpg" /></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Bhakarwadi_new_Portrait_Thumb.jpg" /></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Beyhadh_A_Portrait_Thumb.jpg" /></div>
      </div>
    </Carousel.Item>



    <Carousel.Item interval={1500}>
    <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
        
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Yeh-Un-Dinon-Ki-Baat-Hai1_Portrait_Thumb.jpg" /></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Chamtkar_Portrait_Thumb.jpg" /></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/JJKN_Portrait_Thumb.jpg" /></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/BALH_S2_Portrait_Thumb.jpg" /></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Chidiya-Ghar1_Portrait_Thumb.jpg" /></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Badi-Dooooor-Se-Aaye-Hai1_Portrait_Thumb.jpg" /></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Badi-Dooooor-Se-Aaye-Hai1_Portrait_Thumb.jpg" /></div>
      </div>
    </Carousel.Item>
  </SubMain>
  <br />
  <div class="img-middle">
        <img width="100%" src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_170,q_auto:low,w_1259/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/AMJ_Web_1259x170_WT.png" alt=""/>
    </div>
    <br />
  <h3>Best In Movies</h3>

  <SubMain >


    <Carousel.Item interval={1500}>
    <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
        
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/No_Parking_Mobile_Portrait_Thumb.jpg" /></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Re_LOVE_STORY_12FEB_Potrait_Thumb_WITHOUT_WTP.jpg" /></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Re_Jersey_2019_Potrait_Thumb.jpg" /></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/world_famous_lover_portrait_Thumb.jpg" /></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Valeba-Raj_portrait_thumb_rev.jpg" /></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/dear_comrade_18march_Portrait_Hindi_Thumb.jpg" /></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Action_portrait_Thumb.jpg" /></div>
      </div>
    </Carousel.Item>



    <Carousel.Item interval={1500}>
    <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
        
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/CHENNAI_CENTRAL_Portrait_Thumb.jpg" /></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/My_Brother_Vicky_Potrait_Thumb.jpg" /></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Main_Tera_Deewana_2006_Potrait_Thumb.jpg" /></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Temper_2_Potrait_Thumb.jpg" /></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Don-Ki-Jung_NEW_Portrait_Thumb.jpg" /></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/NOT_OUT_Portrait_Thumb.jpg" /></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Tejasvini_2017_Potrait_Thumb.jpg" /></div>
      </div>
    </Carousel.Item>
  </SubMain>  
  <br />
  <h3>Best In Sports</h3>
  <SubMain >


    <Carousel.Item interval={1500}>
    <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
        
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/SETHD1_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/4867313348001.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/SABTVHD1_Portrait_Thumb1.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/SONYMarathi1_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/BBCEHD_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/SonyPAL_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Re_Sony_Aath_LIVE_channel_portrait_thumb.jpg"/></div>
      </div>
    </Carousel.Item>



    <Carousel.Item interval={1500}>
    <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
        
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/SonyYAY_Portrait_Thumb.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/SonyTEN1HD_Portrait_ThumbNEW.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/SonyTEN2HDNew_Portrait_Thumb.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/SonyTEN3HD_Portrait_ThumbNEW.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/SIXHD_Portrait_ThumbNEW.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/SonyTEN4HD_Portrait_Thumb1.jpg"/></div>
       
      </div>
    </Carousel.Item>
  </SubMain>  
  <br />
  <div class="img-middle">
        <img width="100%" src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_170,q_auto:low,w_1259/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/UndekhiS2_Web_1259x170_WN_Mutlilang_rev_1.png" alt=""/>
    </div>
    <br />
  <h3>Tournaments</h3>

  <SubMain >

    <Carousel.Item interval={1500}>
    <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
        
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/PAKvAUS_2022_Portrait_Thumb_GOB_2.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/WWEGeneric1_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/EuropeanQualifiersforthe2022FIFAWorldCup_Play-offs_GOB_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/UEFANationsLeague2021-22GOB_Portrait_Thumb1.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/FACup21-22GOB2_Portrait_Thumb1.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/UEFAChampionsLeague2021-22GOB_Portrait_ThumbNEW.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Basketball_3x3_march_portrait_thumb.jpg"/></div>
      </div>
    </Carousel.Item>



    <Carousel.Item interval={1500}>
    <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
        
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/UEFAEuropaLeague2021-22GOB_Portrait_Thumb1.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/UEFAEuropaConferenceLeague2021-22_GOB_Portrait_Thumb.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Bundesliga2021-22GOB_Portrait_Thumb1.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/UFC_Portrait_Thumb.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/PSL_2022_Portrait_Thumb_GOB.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/PSL_2022_Portrait_Thumb_GOB.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/PVL22GOB_Portrait_Thumb.jpg"/></div>
      </div>
    </Carousel.Item>
  </SubMain>
  <br />
  <h3>LIV kids</h3>
  <SubMain >
    <Carousel.Item interval={1500}>
    <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
        
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/7DAYS_Portrait_Thumb_2.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/NeedforSpeed_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/1917_generic_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/5724657970001.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/GITS_Portrait_Thumb_2.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/RealSteel_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/IANF_Portrait_Thumb.jpg"/></div>
      </div>
    </Carousel.Item>



    <Carousel.Item interval={1500}>
    <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
        
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/DogsJourney_Portrait_Thumb01.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/LeonardoS1Review_Portrait_Thumb.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/BridgeofSpies_Portrait_Thumb.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Woke_Portrait_Thumb.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/THWAC_revised_Portrait_Thumb1.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/RealSteel_Portrait_Thumb.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/RivieraS3_Portrait_5july_Thumb.jpg"/></div>
      </div>
    </Carousel.Item>
  </SubMain>  
  <br />
  <div class="img-middle">
        <img width="100%" src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_170,q_auto:low,w_1259/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/BAFTA_LIFE_IN_PICTURES_web_rev.png" alt=""/>
    </div>
    <br />
  <h3>Sony BBC Earth Shows</h3>

  <SubMain >


    <Carousel.Item interval={1500}>
    <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
        
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Universe_Mobile_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/SexKnivesAndLiposuction_28JAN_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/HOTEL_ARMADILLO_portrait_thumb_rev_01.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/CITY_IN_THE_SKY_25_JUNE_portrait_thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/PEI_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Babies_Their_Wonderful_World_Portrait_Thumb.jpg"/></div>
<div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Penguins_Meet_the_Family_portrait_thumb.jpg"/></div>
      </div>
    </Carousel.Item>



    <Carousel.Item interval={1500}>
    <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
        
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/6142049895001.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/SECRETS_OF_SKIN_25_JUNE_portrait_thumb.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Deadly60_On_A_Mission_25_JUNE_portrait_thumb.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/The-Secret-Life-Of-Twins_24_portrait_thumb.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Blue-planet-now_portrati_thumb_28J.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/Re_Einstein_and_Hawking_6SEP_portrati_thumb.jpg"/></div>
        <div ><img src = "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_494,q_auto:low,w_344/e_brightness:10/https://origin-staticv2.sonyliv.com/portrait_thumb/WA_Portrait_Thumb.jpg"/></div>
      </div>
    </Carousel.Item>
  </SubMain>  


    </div>
    
  );
};