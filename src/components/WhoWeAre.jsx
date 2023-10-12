import { useSelector } from "react-redux";
import { DarkCard, DarkColor, LightCard, LightColor } from "../theme";

export const WhoWeAre = () => {
  const isDarkModeEnable = useSelector((state) => state.darkMode);

  return (
    <div className={`${isDarkModeEnable ? DarkColor : LightColor} px-2 py-2 md:h-full `}>
      <h1 className="text-3xl underline  py-4">Who we are</h1>

      <div className="container flex md:flex-col  gap-4">


        <div className="content w-1/2  md:h-fit  md:w-full flex flex-col gap-8 sm:gap-4 text-justify">
          <p>
            We are: engineers with an artistic impulse, veteran entrepreneurs,
            community builders, curators of quotes, hosts of intellectual
            salons, side project fanatics, lovers of nature and human nature –
            all united by a desire to scale our ability to help people, and to
            help the Internet continue to truly serve on the side of the user.
          </p>

          <p>
            We believe in the power of small, highly-skilled teams with a deep
            sense of mutual respect. In each role, we are looking for a special
            sort of person with strong bias towards action to become deeply
            passionate about the product and take tremendous ownership.
          </p>

          <p>
            At Ideaflow, it’s important for you to be yourself, nurture your
            creativity, and grow in well being. Join us in building a future
            where humans and machines work together to solve the world’s most
            important problems.
          </p>
          <p>
            We believe in the power of small, highly-skilled teams with a deep
            sense of mutual respect. In each role, we are looking for a special
            sort of person with strong bias towards action to become deeply
            passionate about the product and take tremendous ownership.
          </p>
        </div>


        <div className={`card  w-1/2 md:w-full md:h-full h-[75vh]  ${
            isDarkModeEnable ? DarkCard : LightCard
          }  px-2 py-4 flex flex-col gap-8 md:gap-4 h-fit rounded-lg`}
        >


<div className="card-1 flex  gap-2">
  <img src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5f0376b566db7046ec445d0b_Mindfulness.png" alt="img-1" className="w-20 h-20" />
  <p>$500 per month to promote well being</p>
</div>


<div className="card-2 flex  gap-2">
  <img src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5f0376b511987176d4ccc9a1_Health.png" alt="img-2" className="w-20 h-20" />
  <p>Comprehensive healthcare coverage (including acupuncture!)</p>
</div>



<div className="card-3 flex  gap-2">
  <img src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5f0376b5391a95318ea1e028_Donation%20matching.png" alt="img-3" className="w-20 h-20" />
  <p>Donation matching to your favorite charities</p>
</div>


        </div>




      </div>


    </div>
  );
};
