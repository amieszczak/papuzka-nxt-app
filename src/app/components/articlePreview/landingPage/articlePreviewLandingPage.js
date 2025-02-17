import styles from './articlePreviewLandingPage.module.css';
import classes from '../../../page.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
///
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
///
import getAllPosts from '@/integrations/wordpress/getAllPosts';

export default async function ArticlePreviewLandingPage({title, content, imageSrc, refference}) {

    const posts = await getAllPosts();

    return(
        <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: true,
            }}
            centeredSlides={true}
            slidesPerView={2}
            breakpoints={{
                1200: {
                    spaceBetween: 40,
                },
                
                992: {
                    spaceBetween: 30,
                },
                
                768: {
                    spaceBetween: 20,
                },
                
                576: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                },
                
                450: {
                    slidesPerView: 1.75,
                },

                400: {
                    slidesPerview: 1.5, 
                },

                0: {
                    spaceBetween: 5,
                    slidesPerView: 1.25,
                }
            }}
            >
                {posts?.map((item,index) => {
                    return(
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <Link href={item.refference}>
                                <div className={styles.container}>
                                    <h2 className={classes.paragraphSecondary}>{item.title}</h2>
                                    <div className={styles.contentContainer}>
                                        {imageSrc != null
                                            &&
                                            <>
                                            <p className={classNames({[classes.paragraphTertiary]:true, [styles.paragraph]:true})}>{content}</p>
                                                <div className={styles.photoContainer}>
                                                        <Image 
                                                            width={500} 
                                                            height={250} 
                                                            className={styles.photo} 
                                                            src={item.imageSrc}/>
                                                </div>
                                            </>
                                        }                                
                                    </div>
                                    <div className={styles.bottomBlinder}></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
    )
}

{/* <Link href={refference}>
            <div className={styles.container}>
                <h2 className={classes.paragraphSecondary}>{title}</h2>
                <div className={styles.contentContainer}>
                    {imageSrc != null
                        &&
                        <>
                        <p className={classNames({[classes.paragraphTertiary]:true, [styles.paragraph]:true})}>{content}</p>
                            <div className={styles.photoContainer}>
                                    <Image 
                                        width={500} 
                                        height={250} 
                                        className={styles.photo} 
                                        src={imageSrc}/>
                            </div>
                        </>
                    }                                
                </div>
                <div className={styles.bottomBlinder}></div>
            </div>
        </Link>     */}