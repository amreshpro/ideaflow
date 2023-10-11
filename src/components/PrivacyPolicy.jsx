import { useSelector } from "react-redux";
import { DarkColor, LightColor } from "../theme";

export const PrivacyPolicy = () => {
  const isDarkModeEnable = useSelector((state) => state.darkMode);
  return (
    <div className={`${isDarkModeEnable ? DarkColor : LightColor} flex flex-col text-justify gap-2 px-2 py-2`}>
      <h1 className="text-xl font-semibold">Privacy Policy</h1>
      <p>
        IdeaFlow, Inc. values the privacy of our users and makes all reasonable
        efforts to protect it. This Privacy Policy covers the collection, use
        and disclosure of personal information that may be collected when you
        use IdeaFlow, Inc., such as when you use our services or communicate
        with the IdeaFlow, Inc. Support team. Please read the following to learn
        more about what information we collect, what we do with that
        information, and how we may use your personal information.
      </p>
      <div className="info">
        <h1 className="text-xl font-semibold">Information Collect and use</h1>
        <p>
          We collect certain personal information because we want to provide the
          best possible service. It enables us to deliver product announcements,
          service updates and special offers as well as provide convenient and
          personalized user access and improve the features and usability of our
          products. Unregistered users may still be able to use certain
          IdeaFlow, Inc. services, in which case no personal information is
          collected.
        </p>

        <h2>
          We collect information in a number of situations, including but not
          limited to:
        </h2>

        <ul className="list-disc list-inside">
          <li>
            - Log Information: Our services collect information on your use of
            the services, such as access time, browser type, pages viewed, email
            address, IP address, Cookies.
          </li>

          <li>
            - Location Information: Our services collect information about the
            location of the device when engaging with our service
          </li>

          <li>
            - Website Data: Textual data on the websites visited while using our
            services are collected to allow functionality. Other browsing data
            collected include webpage titles, time of visit, URL’s, etc.
          </li>

          <li>
            - Aggregate information from multiple users: We do not personally
            identifying dividuals in this case. We may share the data with our
            partners to improve understanding of customer needs and provide
            relevant services.
          </li>
        </ul>

        <h3 className="text-lg font-semibold">We collect the aforementioned information to:</h3>
        <ul className="list-disc list-inside ">
          <li>- Provide, operate, maintain, and improve the services</li>
          <li>- Provide customer support services</li>
          <li>- Aid with internal business practices</li>
          <li>- Prevent fraudulent activities and unauthorized access</li>
        </ul>
        <p>
          Once textual web page data is collected, it is used to match data with
          our internal database to provide the service. This webpage information
          is not stored and only used for immediate purposes. Information is
          protected with industry-standard practices, including SSL encryption.
        </p>
        <p>
          Our extension does not respond to DNT signals received from user’s web
          browsers.
        </p>
      </div>

      <div className="public-info">
        <h1 className="text-xl font-semibold">Public Information</h1>
        <p>
          Certain parts of the IdeaFlow, Inc. website and services are open to
          any online viewer, such as documents designated as &quot;public&quot;. Any
          information that you post in these locations can be read, collected
          and used by anyone, and could enable others to send you unsolicited
          messages. Our service enables you to determine whether or not to post
          personal or otherwise sensitive information to publicly accessible
          areas of our site, and so you should carefully consider how you use
          the services. IdeaFlow, Inc. is not responsible for any publication or
          use of any personal information you choose to post in these locations.
        </p>
      </div>

      <div className="disposre flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Information Disclosure to Third Parties</h1>

        <p>
          We do not share, sell, rent or otherwise distribute information you
          enter in IdeaFlow, Inc. to others, except as disclosed in this Privacy
          Policy. We may share your information with others outside of IdeaFlow,
          Inc. under the following circumstances:
        </p>
        <p>
          We have your explicit consent to share the information; We need to
          share your information to fulfill your product or service request,
          such as backing up your data in a third party file storage service
          like Dropbox; We have a good faith belief that sharing or otherwise
          permitting access, disclosure, use or preservation of such information
          is reasonably necessary in order to comply with our legal obligations;
          We believe it is necessary in order to investigate, prevent or take
          action regarding illegal activities, suspected fraud or potential
          threats against persons or property.
        </p>
      </div>

      <div className="cookies flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Use of Cookies</h1>

        <p>
          Cookies are small data files that a website you visit may save on your
          device that usually includes an anonymous unique identifier. A cookie
          cannot retrieve any other data from your hard drive, pass on computer
          viruses, or capture your personal information. Our service uses
          cookies for user authentication, keeping track of your preferences,
          promotional campaigns that require user identification, keeping track
          of our audience size and traffic patterns, and in certain other cases.
        </p>

        <p>
          Depending on which browser you use, you can normally configure your
          browser to accept cookies, reject cookies or notify you when a cookie
          is being used. However, if you configure your browser to reject
          cookies, you may not be able to use our service that require you to
          sign in or take full advantage of our features.
        </p>

        <p>
          We may allow third party business partners that display advertisements
          on some of our web pages to maintain their own cookies on your
          computer. These business partners do not have access to our cookies
          and their use is subject to their own privacy policies.
        </p>
      </div>

      <div className="links">
        <h1 className="text-xl font-semibold">Links</h1>
        <p>
          ‍ Our website and service may contain links to other sites. We are not
          responsible for the privacy policy or other practices employed by
          websites linked to, or from, our website nor the information or
          content contained therein. This privacy statement applies solely to
          information collected by us.
        </p>
      </div>

      <div className="data-ownership">
        <h1 className="text-xl font-semibold">Data Ownership</h1>
        <p>
          You own the data you put into IdeaFlow, Inc.. By putting your
          information into IdeaFlow, Inc., you do not grant us any special
          rights with regard to that information.
        </p>
      </div>

      <div className="data-security flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Data Security</h1>

        <p>
          We&apos;re committed to protect your information. We do the following
          to make sure your information is secure:
        </p>
        <p>
          Your password is protected by encryption and only you have access to
          it; Your personal information and data stored in our systems is
          protected by various physical, electronic and procedural safeguards.
          Some unencrypted data is stored, but all stored data is designed to be
          publicly shared and doesn&apos;t include sensitive user data. Our employees
          do not monitor or view your personal information or content stored in
          our service, but it may be viewed if we learn that our Terms of
          Service may have been violated and confirmation is required, or we
          otherwise determine that we have an obligation to review it;
        </p>

        <p>
          Our services use standard SSL encryption to protect data
          transmissions. SSL encryption is a technology used by thousands of
          leading online services such as banks, email providers and remote
          backup services. However, this is not a guarantee that such data
          transmissions cannot be accessed, altered or deleted due to firewall
          or other security software failures. Industry-standard Transport Layer
          Security encryption technology is also employed to protect the user’s
          data, while all sensitive and personal data is transmitted over HTTPS.
        </p>
        <p>
          If we learn of a security system breach we may attempt to notify you
          and provide information on protective steps, if available, through the
          e-mail address that you supplied during registration or posting a
          notice on our website.
        </p>
      </div>

<div className="international-user">
  <h1 className="text-xl font-semibold">International User</h1>
  <p>Personal information collected by us may be stored and processed in the United States or any other country in which IdeaFlow, Inc. maintains facilities, and by using this website, you consent to any such transfer of information outside of your country.</p>
</div>

<div className="consent">
  <h1 className="text-xl font-semibold">Consent</h1>
<p>By using our services, you consent to the policies and practices outlined by this Privacy Policy.</p>

</div>

<div className="changes-updates">
  <h1 className="text-xl font-semibold">Changes and Updates</h1>
  <p>As this Privacy Policy may be updated from time to time, we will revise and display the effective date at the top of the web page. You should periodically review it to keep abreast of our plans and procedures to protect the personal information that we collect. Your continued use of our services constitutes your agreement to this Privacy Policy and any updates.</p>
<p>If IdeaFlow, Inc. should ever sell its assets, merge with another entity or file for bankruptcy, information collected from this web site and in the operation of the services may be transferred as assets of IdeaFlow, Inc.</p>
</div>








    </div>
  );
};
