import CardReview from "@/components/molecules/card/card-review";
import React from "react";

function CustomerReviews() {
  return (
    <div>
      <h1 className="font-bold text-lg leading-[27px] text-secondary">
        From Happy Customers
      </h1>
      <div className="mt-2.5 grid grid-cols-2 gap-5">
        <CardReview
          rating={4}
          review="This was my first open trip, and everything felt easy and well-organized. I felt comfortable to finish."
          avatar="/images/kimi.svg"
          username="Kimi Antonelli"
          jobdesk="Rookie Traveler"
        />
        <CardReview
          rating={4}
          review="I’ve tried many travel services, and this one really stands out. Great destinations, smooth planning, and reliable guides."
          avatar="/images/yuki.svg"
          username="Yuki Tsunoda"
          jobdesk="Seasoned Explorer"
        />
        <CardReview
          rating={4}
          review="Everything was handled perfectly. From the itinerary to the experience itself, this trip was simply top-level."
          avatar="/images/max.svg"
          username="Max Verstappen"
          jobdesk="High-Speed Adventurer"
        />
        <CardReview
          rating={4}
          review="The journey was smooth, flexible, and full of great moments. Definitely a travel experience I’d love to repeat."
          avatar="/images/alex.svg"
          username="Alex Albon"
          jobdesk="Midfield Master Traveler"
        />
      </div>
    </div>
  );
}

export default CustomerReviews;
