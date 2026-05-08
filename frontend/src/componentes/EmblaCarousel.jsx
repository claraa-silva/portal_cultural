import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

import { DotButton, useDotButton } from './EmblaCarouselDotButton'

const TWEEN_FACTOR_BASE = 0.2

const EmblaCarousel = (props) => {
  const { slides, options } = props

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  // pega os elementos que vão receber o efeito parallax
  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer')
    })
  }, [])

  // define intensidade do efeito
  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current =
      TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  // efeito parallax
  const tweenParallax = useCallback((emblaApi, event) => {
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = event?.type === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      if (isScrollEvent && !slidesInView.includes(snapIndex)) return

      const diffToTarget = scrollSnap - scrollProgress

      const translate =
        diffToTarget * (-1 * tweenFactor.current) * 100

      const tweenNode = tweenNodes.current[snapIndex]

      if (tweenNode) {
        tweenNode.style.transform = `translateX(${translate}%)`
      }
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('select', tweenParallax)
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenParallax])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <img
                    className="embla__slide__img embla__parallax__img"
                    src={`https://picsum.photos/600/350?v=${index}`}
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />

          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot${
                index === selectedIndex
                  ? ' embla__dot--selected'
                  : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel