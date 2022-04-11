import React,{useState} from 'react'
import TitleName from './TitleName'
import ClientReviews from '../assets/data/ClientReviews'
import { MdArrowBack,MdArrowForward } from 'react-icons/md'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import ReviewStyle from '../style/Review.styles'


export default function ClientReviewSection(){
    const[index, setIndex]= useState(0)
    const slideIndex = ClientReviews[index];

    function nextHandleIndex(){
        if(index >= ClientReviews.length -1){
            setIndex(0);
        }else{
            setIndex((prevIndex)=>prevIndex + 1);
        }
    }
    function prevHandleIndex(){
        if(index === 0){
            setIndex(ClientReviews.length-1);
        }else{
            setIndex((prevIndex)=>prevIndex -1);
        }
    }
    return(

        <ReviewStyle>
            <div className='container'>
                <TitleName title="Client Reviews" />
                <div className='wrap'>
                    <SwitchTransition component = {null}>
                        <CSSTransition
                        key={slideIndex.id}
                        timeout={250}
                        classNames='fade'
                        >
                            <div className='reviewInfo'>
                                <div className='reviewDesc'>
                                 <p className='para'>
                                     {slideIndex.desc}
                                 </p>
                                </div>
                                <h2 className='reviewName'>{slideIndex.name}</h2>
                                <p className='reviewTitle'> {slideIndex.title} <br/> {slideIndex.org}</p>
                            </div>
                        </CSSTransition>

                    </SwitchTransition>
                </div>
                <div className='arrow'>
                    <div
                    className='prevSlide'
                    onClick={prevHandleIndex}
                    role='button'
                    >
                        <MdArrowBack />
                    </div>
                    <div
                    className='nextSlide'
                    onClick={nextHandleIndex}
                    role='button'

                    >
                        <MdArrowForward />
                    </div>
                </div>
            </div>
        </ReviewStyle>
    )

}