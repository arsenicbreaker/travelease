import CardFacility from "@/components/molecules/card/card-facility";
import { Listing as ListingInterface } from "@/interfaces/listing";
import Image from "next/image";
import React from "react";

function Listing({ listing }: { listing: ListingInterface }) {
  return (
    <div className="w-full max-w-[460px] h-fit p-[30px] space-y-5 bg-white rounded-[30px] shadow-indicator border border-border">
      <Image
        src="/images/image-detail-1.svg"
        alt="image-1"
        height={0}
        width={0}
        className="w-full h-[220px] rounded-[30px]"
      />
      <h1 className="font-bold text-[22px] leading-[33px] text-secondary">
        {listing.title}
      </h1>
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
<div className="flex items-center font-semibold leading-6 max-w-[250px]">            <Image
              src="/icons/location-dark.svg"
              alt="location-dark"
              height={0}
              width={0}
              className="w-5 h-5 mr-1"
            />
            {listing.address}
          </div>
          <div className="flex items-center font-semibold leading-6">
            <Image
              src="/icons/format-square-dark.svg"
              alt="format-square-dark"
              height={0}
              width={0}
              className="w-5 h-5 mr-1"
            />
            {listing.sqft} Trip Finished
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center font-semibold leading-6">
            <Image
              src="/icons/profile-2user-dark.svg"
              alt="profile-2user-dark"
              height={0}
              width={0}
              className="w-5 h-5 mr-1"
            />
            Max {listing.max_person} people
          </div>
          <div className="flex items-center font-semibold leading-6">
            <Image
              src="/icons/wifi-dark.svg"
              alt="wifi-dark"
              height={0}
              width={0}
              className="w-5 h-5 mr-1"
            />
            Free Wifi up to {listing.wifi_speed} gbps
          </div>
        </div>
      </div>
      <div className="space-y-3.5">
        <CardFacility
          icon="/icons/security.svg"
          title="Local Trip Leader"
          subtitle="Experienced guide"
        />
        <CardFacility
          icon="/icons/weight.svg"
          title="Transportation"
          subtitle="Comfortable vehicle"
        />
        <CardFacility
          icon="/icons/coffee.svg"
          title="Meals Included"
          subtitle="Selected local meals"
        />
        <CardFacility
          icon="/icons/video-play.svg"
          title="Travel Insurance"
          subtitle="Safety coverage for all"
        />
      </div>
    </div>
  );
}

export default Listing;
