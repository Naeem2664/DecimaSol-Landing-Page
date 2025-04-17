import React from 'react'
import TestimonialCarousel from '../components/TestimonialsCarousel'
import '../styles/testimonials.css'
import { fontsColor } from "../assets/fonts/colors";
const Testimonials = () => {
  return (
    <>
    <div className="testimonials mt-5">
    <TestimonialCarousel fontsColor={fontsColor} />
    </div>
    </>
  )
}

export default Testimonials
