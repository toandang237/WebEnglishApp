/** @format */

import { useDispatch } from "react-redux";
import { ShowLogin, ShowSignup } from "../Creators/LoginSignUpCreator";

export default function HomePage() {
  const dispatch = useDispatch();
  const openSignup = () => {
    dispatch(ShowSignup());
  };
  const openLogin = () => {
    dispatch(ShowLogin());
  };
  return (
    <main className="page" id="page">
      <section
        data-force-default="false"
        className="PrismicFullBleedImage PrismicFullBleedImage--customBackgroundColor"
        style={{
          "--ui_full_bleed_image_desktop_max_image_height": "720px",
          "--ui_full_bleed_image_mobile_max_image_height": "720px",
          "--ui_full_bleed_image_desktop_min_image_height": "720px",
          "--ui_full_bleed_image_mobile_min_image_height": "720px",
          "--ui_custom_full_bleed_image_text_color": "#ffffff",
          "--ui_custom_full_bleed_image_background_color": "#44131f",
        }}
      >
        <div className="PrismicFullBleedImage-container">
          <div className="PrismicFullBleedImageCard PrismicFullBleedImageCard--colorCustom">
            <div className="UIContainer">
              <div className="PrismicFullBleedImageCard-image-container">
                <picture className="PrismicFullBleedImageCard-img">
                  <source
                    srcSet="https://images.prismic.io/quizlet-prod/18a3a46a-b31f-41cb-b02c-ab857d3daa7d_MobileHero.png?auto=compress,format 1x"
                    media="(max-width: 768px)"
                  />
                  <source
                    srcSet="https://images.prismic.io/quizlet-prod/6aa15201-1bbd-4bab-803d-93e7d2d4110e_Alt+Image+1+%281%29.png?auto=compress,format 1x"
                    media="(min-width: 769px)"
                  />
                  <img srcSet="https://images.prismic.io/quizlet-prod/18a3a46a-b31f-41cb-b02c-ab857d3daa7d_MobileHero.png?auto=compress,format 1x" />
                </picture>
              </div>
              <div className="PrismicFullBleedImageCard-container PrismicFullBleedImageCard-container--desktopContentPositionCenterLeft PrismicFullBleedImageCard-container--mobileContentPositionTopLeft">
                <div className="UIContainer">
                  <div
                    className="PrismicFullBleedImageCard-text"
                    style={{ color: "var(--gray-400-gray-800)" }}
                  >
                    <h1 className="UIHeading--assembly UIHeading UIHeading--one">
                      The best digital flashcards and study tools
                    </h1>
                    <div>
                      <p className="UIParagraph--assembly UIParagraph"></p>
                      <p>
                        Join over 60 million students using Quizlet's
                        science-backed flashcards, practice tests and expert
                        solutions to improve their grades and reach their goals.
                      </p>
                    </div>
                  </div>
                  <div className="PrismicFullBleedImageCard-cta PrismicFullBleedImageCard-cta--positionBottom">
                    <div className="PrismicCallToAction--container">
                      <a
                        className="AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--large AssemblyButtonBase--padding"
                        href="#"
                        onClick={openSignup}
                      >
                        <span>Sign up for free</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-force-default="false"
        className="PrismicRichTextField PrismicSimpleRichText PrismicSimpleRichText--white"
      >
        <div className="UIContainer UIContainer--isFullBleed UIContainer--isMaxWidthLarge">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <h2>
            90% of students who use Quizlet report receiving higher grades
          </h2>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </section>
      <section
        data-force-default="false"
        className="PrismicTextCallout PrismicTextCallout--whiteBackground PrismicTextCallout--rightImage"
      >
        <div className="UIContainer UIContainer--isFullBleed UIContainer--isMaxWidthLarge">
          <div className="PrismicTextCallout-content">
            <div className="PrismicTextCallout-image">
              <img
                alt=""
                srcSet="https://images.prismic.io/quizlet-prod/31c85d7d-9e36-40a4-9fae-5027c355ddee_Flashcards-1.gif?auto=compress,format 1x, https://images.prismic.io/quizlet-prod/31c85d7d-9e36-40a4-9fae-5027c355ddee_Flashcards-1.gif?auto=compress,format 2x"
              />
            </div>
            <div className="PrismicTextCallout-description">
              <div className="PrismicTextCallout-title PrismicTextCallout--titleLeft">
                <div className="PrismicTextCallout-heading PrismicTextCallout-heading--colorIndigo">
                  <h1 className="UIHeading--assembly UIHeading UIHeading--one"></h1>
                </div>
                <h2 className="UIHeading--assembly UIHeading UIHeading--two">
                  Memorize faster for free
                </h2>
              </div>
              <div className="PrismicTextCallout-descriptionWrap PrismicTextCallout--descriptionLeft">
                <p className="UIParagraph--assembly UIParagraph"></p>
                <p>
                  Research shows that testing yourself with flashcards is more
                  effective than rereading your notes. From math to medicine to
                  modern languages, Quizlet is used by students in over 100
                  different subjects.
                </p>
                <p></p>
              </div>
              <div className="UIDiv PrismicTextCallout-cta PrismicTextCallout--descriptionLeft">
                <div className="PrismicCallToAction--container">
                  <a
                    className="AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--xlarge AssemblyButtonBase--padding"
                    href="#"
                    onClick={openLogin}
                  >
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-force-default="false"
        className="PrismicRichTextField PrismicSimpleRichText PrismicSimpleRichText--white"
      >
        <div className="UIContainer UIContainer--isFullBleed UIContainer--isMaxWidthLarge">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <h2 className="center">See our flashcards in action</h2>
          <p></p>
        </div>
      </section>
      <section className="PrismicVideoEmbedWithText PrismicVideoEmbedWithText--videoTop PrismicVideoEmbedWithText--whiteBackground PrismicVideoEmbedWithText--videoWithoutText">
        <div className="UIContainer UIContainer--isFullBleed UIContainer--isMaxWidthLarge">
          <div className="PrismicVideoEmbedWithText-content">
            <div className="PrismicVideoEmbedWithText-video PrismicVideoEmbedWithText--videoLarge">
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "block",
                    paddingTop: "56.25%",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    top: "0",
                    right: "0",
                  }}
                >
                  <iframe
                    allowFullScreen
                    height={"100%"}
                    seamless
                    src="https://www.youtube.com/embed/E-wY2mJVlu0"
                    width={"100%"}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-force-default="false"
        className="PrismicRichTextField PrismicSimpleRichText PrismicSimpleRichText--white"
      >
        <div className="UIContainer UIContainer--isFullBleed UIContainer--isMaxWidthLarge">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </section>
      <section
        data-force-default="false"
        className="PrismicTextCallout PrismicTextCallout--whiteBackground"
      >
        <div className="UIContainer UIContainer--isFullBleed UIContainer--isMaxWidthLarge">
          <div className="PrismicTextCallout-content">
            <div className="PrismicTextCallout-image">
              <img
                alt=""
                srcSet="https://images.prismic.io/quizlet-prod/1d359d1f-be06-481d-af18-30a4d93b3b0f_commute-image.png?auto=compress,format&amp;rect=0,0,1001,1000&amp;w=1001&amp;h=1000 1x, https://images.prismic.io/quizlet-prod/1d359d1f-be06-481d-af18-30a4d93b3b0f_commute-image.png?auto=compress,format&amp;rect=0,0,1001,1000&amp;w=1001&amp;h=1000 2x"
              />
            </div>
            <div className="PrismicTextCallout-description">
              <div className="PrismicTextCallout-title PrismicTextCallout--titleLeft">
                <div className="PrismicTextCallout-heading">
                  <h1 className="UIHeading--assembly UIHeading UIHeading--one"></h1>
                </div>
                <h2 className="UIHeading--assembly UIHeading UIHeading--two">
                  Yesterday’s bus ride, today’s study session
                </h2>
              </div>
              <div className="PrismicTextCallout-descriptionWrap PrismicTextCallout--descriptionLeft">
                <p className="UIParagraph--assembly UIParagraph"></p>
                <p>
                  Leave the notes and paper flashcards at home and study
                  anywhere — even offline — with our iOS and Android apps. Your
                  progress syncs across your phone and computer.&nbsp;{" "}
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="prismicImageAndIconsCalloutSlice-646a523283681">
        <div
          className="p1mcvm6s"
          style={{
            "--p1mcvm6s-0": "4rem",
            "--p1mcvm6s-1": "0",
            "--p1mcvm6s-3": "2rem",
            "--p1mcvm6s-4": "0",
            "--p1mcvm6s-5": "#ffffff",
          }}
        >
          <div className="woq3ntb">
            <div className="hideAbove--s" hidden>
              <img
                srcSet="https://images.prismic.io/quizlet-prod/7ae82b39-4edc-4d12-963e-cc864b6d9a05_LearnandTest-mobile2.gif?auto=compress,format"
                className="m11q9r6k"
              />
            </div>
            <div
              className="cmyqaye"
              style={{
                "--cmyqaye-1": "1 / 1 / 1 / 2",
                "--cmyqaye-2": "4rem 3.5rem 3.5rem 3.5rem",
                "--cmyqaye-3": "auto",
                "--cmyqaye-4": "0",
                "--cmyqaye-6": "1.5rem",
              }}
            >
              <span
                className="cssrxmc"
                style={{ "--cssrxmc-0": "#ffcd1f", "--cssrxmc-1": "#000000" }}
              >
                ACTION
              </span>
              <div
                className="tfomyx6"
                style={{ "--tfomyx6-0": "left", "--tfomyx6-1": "#000000" }}
              >
                <h2 className="h1m9q4bf">Ace your exams with Learn and Test</h2>
              </div>
              <p
                className="d5ww82k"
                style={{ "--d5ww82k-2": "left", "--d5ww82k-6": "#000000" }}
              >
                Turn your flashcards into customisable tests. Go beyond
                memorisation with question types that challenge your recall.
              </p>
              <div
                className="c1mysevn"
                style={{
                  "--c1mysevn-0": "none",
                  "--c1mysevn-2": "none",
                  "--c1mysevn-3": "flex-start",
                  "--c1mysevn-4": "1.5rem",
                }}
              >
                <a
                  href="#"
                  onClick={openLogin}
                  className="AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--large AssemblyButtonBase--padding"
                >
                  <span>Try Learn and Test for free</span>
                </a>
              </div>
              <div className="i1rs7b62" style={{ "--i1rs7b62-1": "#000000" }}>
                <div className="iunybfq" style={{ "--iunybfq-0": "2rem" }}>
                  <div className="iss2t4e">
                    <img
                      alt="ảnh"
                      srcSet="https://quizlet-prod.cdn.prismic.io/quizlet-prod/8ec0178c-1b86-4698-b547-bcbe3e5172d4_learn.svg"
                      className="i107qmto"
                    />
                  </div>
                  <div className="i1kxjj6w">
                    <h2 className="i16rph2k">Practise with Learn</h2>
                    <p className="itkgtkf">
                      Based on spaced repetition principles, Learn mode lets you
                      practice with multiple choice, true or false, written
                      questions and more.
                    </p>
                  </div>
                </div>
                <div
                  className="iunybfq"
                  style={{
                    "--iunybfq-0": "2rem",
                  }}
                >
                  <div className="iss2t4e">
                    <img
                      alt="ảnh"
                      srcSet="https://quizlet-prod.cdn.prismic.io/quizlet-prod/69eba793-2788-47dd-a8a7-e89d723edbe7_Test.svg"
                      className="i107qmto"
                    />
                  </div>
                  <div className="i1kxjj6w">
                    <h2 className="i16rph2k">Take a Test</h2>
                    <p className="itkgtkf">
                      Check your knowledge with practice tests so you’re
                      prepared for your exams.
                    </p>
                  </div>
                </div>
                <div className="iunybfq" style={{ "--iunybfq-0": "2rem" }}>
                  <div className="iss2t4e">
                    <img
                      alt="ảnh"
                      srcSet="https://quizlet-prod.cdn.prismic.io/quizlet-prod/5364d9dd-a28d-41ca-a5d1-308c49aa0f49_Smart+Grading.svg"
                      className="i107qmto"
                    />
                  </div>
                  <div className="i1kxjj6w">
                    <h2 className="i16rph2k">Access smart grading</h2>
                    <p className="itkgtkf">
                      Quizlet’s smart grading feature ensures you aren’t marked
                      incorrect for minor mistakes.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="c1mysevn"
                style={{
                  "--c1mysevn-0": "flex",
                  "--c1mysevn-2": "flex",
                  "--c1mysevn-3": "flex-start",
                  "--c1mysevn-4": "0",
                }}
              >
                <a
                  href="/#"
                  className="AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--large AssemblyButtonBase--padding"
                  onClick={openLogin}
                >
                  <span>Try Learn and Test for free</span>
                </a>
              </div>
            </div>
            <div className="hideBelow--s">
              <div
                className="d9fwnkt"
                style={{ "--d9fwnkt-0": "29.375rem", "--d9fwnkt-1": "2rem" }}
              >
                <div
                  className="bqx8quj d5nj3ur"
                  style={{
                    "--d5nj3ur-0": "1 / 2 / 1 / 3",
                    "--d5nj3ur-1":
                      "url(https://images.prismic.io/quizlet-prod/23a19326-20bc-47c2-98d8-0534f8661b8c_LearnandTest-1.gif?auto=compress,format)",
                    "--d5nj3ur-2": "left",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
