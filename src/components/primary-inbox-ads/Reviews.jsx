import React from 'react'
import AdHeader from './AdHeader'
import { TestimonialUsersIcon } from '@/assets/icons'
import ReviewsCarousel from './ReviewsCarousel'

const Reviews = () => {
  return (
    <div className="w-full h-auto px-4 pt-[60px] overflow-hidden">
      <div className="w-full h-auto">
        <div className="container mx-auto h-auto flex flex-col gap-10">
          <AdHeader
            icon={<TestimonialUsersIcon />}
            text={`Testimonials`}
            simpleTitle={`User reviews and `}
            coloredTitle={`feedback`}
            description={`Users share how Capable redefined their social experiences.`}
            btnText={`Book Free 30-min Meeting`}
          />

          <div className="w-full h-auto">
            <ReviewsCarousel />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Reviews
