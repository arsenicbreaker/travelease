import CardIndicator from "@/components/molecules/card/card-indicator";
import { Button } from "@/components/atomics/button";
import { Input } from "@/components/atomics/input";
import { Separator } from "@/components/atomics/separator";
import Title from "@/components/atomics/title";
import categories from "@/json/categories.json";
import { CategoriesProps } from "@/interfaces/landing-page";
import Image from "next/image";
import CardBenefit from "@/components/molecules/card/card-benefit";
import CardPurpose from "@/components/molecules/card/card-purpose";
import CardReview from "@/components/molecules/card/card-review";
import ListingShowcase from "@/components/molecules/listing/listing-showcase";

function Home() {
  return (
    <main>
      <section
        id="hero-section"
        className={`bg-primary-foreground bg-cover lg:bg-contain bg-right bg-no-repeat bg-[url('/images/bg-image.svg')] min-h-[750px] max-h-[750px] xl:max-h-[850px]`}
      >
        <div className="pt-[226px] container mx-auto">
          <div className="max-w-[555px]">
            <Title
              title="Find Glorious Trip And Loving Space"
              subtitle="Discover the best travel experiences with affordable prices and maximum comfort at every destination."
              section="hero"
            />
            <div className="pt-[50px] flex items-center">
              <div className="grow">
                <Input
                  placeholder="Search by city or country..."
                  variant="hero"
                />
              </div>
              <Button variant="default" size="hero">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="indicator-section"
        className="px-10 xl:container xl:mx-auto -mt-16 pb-9"
      >
        <div className="h-[128px] flex justify-center xl:justify-between items-center space-x-6 xl:space-x-12 bg-white shadow-indicator rounded-[20px] px-9 py-5 xl:px-[50px] xl:py-[29px]">
          <CardIndicator
            icon="/icons/house-2.svg"
            title="1.4k+"
            subtitle="Trip Finished"
            variant="indicator"
          />
          <Separator orientation="vertical" className="bg-separator" />
          <CardIndicator
            icon="/icons/people-2.svg"
            title="9/10"
            subtitle="People Happy"
            variant="indicator"
          />
          <Separator orientation="vertical" className="bg-separator" />
          <CardIndicator
            icon="/icons/security-user.svg"
            title="100%"
            subtitle="High Security"
            variant="indicator"
          />
          <Separator orientation="vertical" className="bg-separator" />
          <CardIndicator
            icon="/icons/global.svg"
            title="183"
            subtitle="Countries"
            variant="indicator"
          />
        </div>
      </section>

      <ListingShowcase
        id="deals-section"
        title="Our Latest Deals"
        subtitle="Explore the beauty of architecture and living love"
      />

      <section id="categories-section" className="bg-gray-light">
        <div className="px-10 xl:container xl:mx-auto py-[50px]">
          <div className="flex items-center justify-between">
            <Title title="Categories" subtitle="We provide everything" />
            <div>
              <Button variant="default" size="button" className="shadow-button">
                Explore All
              </Button>
            </div>
          </div>

          <div className="mt-[30px] grid grid-cols-3 xl:grid-cols-4 gap-[30px]">
            {categories.data.map((item: CategoriesProps, index: number) => (
              <CardIndicator
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                section="categories"
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="benefits-section"
        className="px-10 xl:container xl:mx-auto mt-[100px]"
      >
        <div className="flex justify-between gap-4">
          <div className="max-w-[320px] xl:max-w-[383px]">
            <h1 className="font-bold text-[28px] leading-[42px] max-w-[350px]">
              Huge Benefits That Make You Feel Happier
            </h1>
            <ul className="mt-[30px] space-y-5">
              <CardBenefit benefit="Easy & fast booking" />
              <CardBenefit benefit="24/7 customer support" />
              <CardBenefit benefit="Trusted local guides and partners" />
              <CardBenefit benefit="Flexible travel packages" />
              <CardBenefit benefit="Unforgettable experiences at top destinations" />
            </ul>
            <div className="mt-[30px] flex items-center space-x-3 xl:space-x-[14px]">
              <Button
                variant="default"
                size="header"
                className="flex items-center"
              >
                <Image
                  src="/icons/message-notif.svg"
                  alt="message-notif"
                  height={0}
                  width={0}
                  className="h-5 w-5 mr-2.5"
                />
                Call Sales
              </Button>
              <Button variant="third" size="header">
                All Benefits
              </Button>
            </div>
          </div>
          <div className="max-w-[650px] grid grid-cols-2 gap-6 xl:gap-[30px]">
            <CardPurpose
              image="/images/image-benefit-1.svg"
              title="City & Cultural Tours"
              purpose="18,309"
            />
            <CardPurpose
              image="/images/image-benefit-2.svg"
              title="Beach & Island Getaways"
              purpose="84,209"
            />
            <CardPurpose
              image="/images/image-benefit-3.svg"
              title="Nature & Adventure Trips"
              purpose="22,409"
            />
            <CardPurpose
              image="/images/image-benefit-4.svg"
              title="Historical & Heritage Tours"
              purpose="47,584"
            />
          </div>
        </div>
      </section>

      <section id="review-section" className="container mx-auto my-[100px]">
        <div className="flex justify-center text-center">
          <Title
            title="Happy Customers"
            subtitle={`We’d love to come back again soon`}
            section=""
          />
        </div>
        <div className="mt-[30px] grid grid-cols-3 gap-[30px]">
          <div className="space-y-[30px]">
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/max.svg"
              username="Max Verstappen"
              jobdesk="High-Speed Adventurer"
            />
            <CardReview
              rating={4}
              review="It’s just amazing, will be back."
              avatar="/images/alex.svg"
              username="Alex Albon"
              jobdesk="Midfield Master Traveler"
            />
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/yuki.svg"
              username="Yuki Tsunoda"
              jobdesk="Seasoned Explorer"
            />
          </div>
          <div className="space-y-[30px]">
            <CardReview
              rating={5}
              review="Price was too low yet luxury."
              avatar="/images/kimi.svg"
              username="Kimi Antonelli"
              jobdesk="Rookie Traveler"
            />
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/carlos.svg"
              username="Carlos Sainz"
              jobdesk="Smooth-Ride Traveler"
            />
            <CardReview
              rating={5}
              review="During covid I was stayed here and I got a lot of full of supports that I need to keep my body healthy."
              avatar="/images/isack.svg"
              username="Isack Hadjar"
              jobdesk="Next-Gen Challenger"
            />
          </div>
          <div className="space-y-[30px]">
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/lewis.svg"
              username="Lewis Hamilton"
              jobdesk="Legendary World Explorer"
            />
            <CardReview
              rating={4}
              review="It’s just amazing, will be back."
              avatar="/images/oscar.svg"
              username="Oscar Piatri"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/lando.svg"
              username="Lando Norris"
              jobdesk="Fun & Free Explorer"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
