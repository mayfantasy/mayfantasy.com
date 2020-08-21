import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'
import Works from 'components/Works'

const TermsPage = () => {
  return (
    <>
      <style jsx>{`
        .terms-page {
        }
      `}</style>
      <Layout
        pageAbsoluteUrl="https://www.mayfantasy.com/terms-of-use/"
        htmlTitle="Terms of Use | Mayfantasy"
        htmlDescription="The mayfantasy.com Web Site is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. Your use of the mayfantasy.com Web Site constitutes your agreement to all such terms, conditions, and notices."
      >
        <div className="terms-page max-w-1000px m-auto">
          {/* Hero Banner */}
          <HeroBanner
            title="Terms of Use"
            includeContact
            src="/banner/terms-banner.png"
            alt="Terms of Use Banner"
          />
          <br />
          {/* Content */}
          <article>
            <h2 className="mb-2">
              <strong>AGREEMENT BETWEEN USER AND mayfantasy.com</strong>
            </h2>

            <p className="mb-3">
              The mayfantasy.com Web Site is comprised of various Web pages
              operated by mayfantasy.com.
            </p>

            <p className="mb-3">
              The mayfantasy.com Web Site is offered to you conditioned on your
              acceptance without modification of the terms, conditions, and
              notices contained herein. Your use of the mayfantasy.com Web Site
              constitutes your agreement to all such terms, conditions, and
              notices.
            </p>

            <h2 className="mb-2">
              <strong>MODIFICATION OF THESE TERMS OF USE</strong>
            </h2>

            <p className="mb-3">
              mayfantasy.com reserves the right to change the terms, conditions,
              and notices under which the mayfantasy.com Web Site is offered,
              including but not limited to the charges associated with the use
              of the mayfantasy.com Web Site.
            </p>

            <h2 className="mb-2">
              <strong>LINKS TO THIRD PARTY SITES</strong>
            </h2>

            <p className="mb-3">
              The mayfantasy.com Web Site may contain links to other Web Sites
              ("Linked Sites"). The Linked Sites are not under the control of
              mayfantasy.com and mayfantasy.com is not responsible for the
              contents of any Linked Site, including without limitation any link
              contained in a Linked Site, or any changes or updates to a Linked
              Site. mayfantasy.com is not responsible for webcasting or any
              other form of transmission received from any Linked Site.
              mayfantasy.com is providing these links to you only as a
              convenience, and the inclusion of any link does not imply
              endorsement by mayfantasy.com of the site or any association with
              its operators.
            </p>

            <h2 className="mb-2">
              <strong>NO UNLAWFUL OR PROHIBITED USE</strong>
            </h2>

            <p className="mb-3">
              As a condition of your use of the mayfantasy.com Web Site, you
              warrant to mayfantasy.com that you will not use the mayfantasy.com
              Web Site for any purpose that is unlawful or prohibited by these
              terms, conditions, and notices. You may not use the mayfantasy.com
              Web Site in any manner which could damage, disable, overburden, or
              impair the mayfantasy.com Web Site or interfere with any other
              party's use and enjoyment of the mayfantasy.com Web Site. You may
              not obtain or attempt to obtain any materials or information
              through any means not intentionally made available or provided for
              through the mayfantasy.com Web Sites.
            </p>

            <h2 className="mb-2">
              <strong>USE OF COMMUNICATION SERVICES</strong>
            </h2>

            <p className="mb-3">
              The mayfantasy.com Web Site may contain bulletin board services,
              chat areas, news groups, forums, communities, personal web pages,
              calendars, and/or other message or communication facilities
              designed to enable you to communicate with the public at large or
              with a group (collectively, "Communication Services"), you agree
              to use the Communication Services only to post, send and receive
              messages and material that are proper and related to the
              particular Communication Service. By way of example, and not as a
              limitation, you agree that when using a Communication Service, you
              will not:
            </p>

            <p className="mb-3">
              Defame, abuse, harass, stalk, threaten or otherwise violate the
              legal rights (such as rights of privacy and publicity) of others.
            </p>

            <p className="mb-3">
              Publish, post, upload, distribute or disseminate any
              inappropriate, profane, defamatory, infringing, obscene, indecent
              or unlawful topic, name, material or information.
            </p>

            <p className="mb-3">
              Upload files that contain software or other material protected by
              intellectual property laws (or by rights of privacy of publicity)
              unless you own or control the rights thereto or have received all
              necessary consents.
            </p>

            <p className="mb-3">
              Upload files that contain viruses, corrupted files, or any other
              similar software or programs that may damage the operation of
              another's computer.
            </p>

            <p className="mb-3">
              Advertise or offer to sell or buy any goods or services for any
              business purpose, unless such Communication Service specifically
              allows such messages.
            </p>

            <p className="mb-3">
              Conduct or forward surveys, contests, pyramid schemes or chain
              letters.
            </p>

            <p className="mb-3">
              Download any file posted by another user of a Communication
              Service that you know, or reasonably should know, cannot be
              legally distributed in such manner.
            </p>

            <p className="mb-3">
              Falsify or delete any author attributions, legal or other proper
              notices or proprietary designations or labels of the origin or
              source of software or other material contained in a file that is
              uploaded.
            </p>

            <p className="mb-3">
              Restrict or inhibit any other user from using and enjoying the
              Communication Services.
            </p>

            <p className="mb-3">
              Violate any code of conduct or other guidelines which may be
              applicable for any particular Communication Service.
            </p>

            <p className="mb-3">
              Harvest or otherwise collect information about others, including
              e-mail addresses, without their consent.
            </p>

            <p className="mb-3">Violate any applicable laws or regulations.</p>

            <p className="mb-3">
              mayfantasy.com has no obligation to monitor the Communication
              Services. However, mayfantasy.com reserves the right to review
              materials posted to a Communication Service and to remove any
              materials in its sole discretion. mayfantasy.comt reserves the
              right to terminate your access to any or all of the Communication
              Services at any time without notice for any reason whatsoever.
            </p>

            <p className="mb-3">
              mayfantasy.com reserves the right at all times to disclose any
              information as necessary to satisfy any applicable law,
              regulation, legal process or governmental request, or to edit,
              refuse to post or to remove any information or materials, in whole
              or in part, in mayfantasy.com sole discretion.
            </p>

            <p className="mb-3">
              Always use caution when giving out any personally identifying
              information about yourself or your children in any Communication
              Service. mayfantasy.com does not control or endorse the content,
              messages or information found in any Communication Service and,
              therefore, mayfantasy.com specifically disclaims any liability
              with regard to the Communication Services and any actions
              resulting from your participation in any Communication Service.
              Managers and hosts are not authorized mayfantasy.com
              spokespersons, and their views do not necessarily reflect those of
              mayfantasy.com.
            </p>

            <p className="mb-3">
              Materials uploaded to a Communication Service may be subject to
              posted limitations on usage, reproduction and/or dissemination.
              You are responsible for adhering to such limitations if you
              download the materials.
            </p>

            <h2 className="mb-2">
              <strong>
                MATERIALS PROVIDED TO mayfantasy.com OR POSTED AT ANY
                mayfantasy.com WEB SITE
              </strong>
            </h2>

            <p className="mb-3">
              mayfantasy.com does not claim ownership of the materials you
              provide to mayfantasy.com (including feedback and suggestions) or
              post, upload, input or submit to any mayfantasy.com Web Site or
              its associated services (collectively "Submissions"). However, by
              posting, uploading, inputting, providing or submitting your
              Submission you are granting mayfantasy.com, its affiliated
              companies and necessary sublicensees permission to use your
              Submission in connection with the operation of their Internet
              businesses including, without limitation, the rights to: copy,
              distribute, transmit, publicly display, publicly perform,
              reproduce, edit, translate and reformat your Submission; and to
              publish your name in connection with your Submission.
            </p>

            <p className="mb-3">
              No compensation will be paid with respect to the use of your
              Submission, as provided herein. mayfantasy.com is under no
              obligation to post or use any Submission you may provide and may
              remove any Submission at any time in mayfantasy.com sole
              discretion.
            </p>

            <p className="mb-3">
              By posting, uploading, inputting, providing or submitting your
              Submission you warrant and represent that you own or otherwise
              control all of the rights to your Submission as described in this
              section including, without limitation, all the rights necessary
              for you to provide, post, upload, input or submit the Submissions.
            </p>

            <h2 className="mb-2">
              <strong>LIABILITY DISCLAIMER</strong>
            </h2>

            <p className="mb-3">
              THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
              AVAILABLE THROUGH THE mayfantasy.com WEB SITE MAY INCLUDE
              INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY
              ADDED TO THE INFORMATION HEREIN. mayfantasy.com AND/OR ITS
              SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE
              mayfantasy.com WEB SITE AT ANY TIME. ADVICE RECEIVED VIA THE
              mayfantasy.com WEB SITE SHOULD NOT BE RELIED UPON FOR PERSONAL,
              MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN
              APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR
              SITUATION.
            </p>

            <p className="mb-3">
              mayfantasy.com AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT
              THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND
              ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND
              RELATED GRAPHICS CONTAINED ON THE mayfantasy.com WEB SITE FOR ANY
              PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL
              SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED
              GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY
              KIND. mayfantasy.com AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL
              WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION,
              SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL
              IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
            </p>

            <p className="mb-3">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL mayfantasy.com AND/OR ITS SUPPLIERS BE LIABLE FOR ANY
              DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL
              DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION,
              DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY
              WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE mayfantasy.com
              WEB SITE, WITH THE DELAY OR INABILITY TO USE THE mayfantasy.com
              WEB SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO
              PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS,
              SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE mayfantasy.com
              WEB SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE
              mayfantasy.com WEB SITE, WHETHER BASED ON CONTRACT, TORT,
              NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF mayfantasy.com
              OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF
              DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE
              EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR
              INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF
              YOU ARE DISSATISFIED WITH ANY PORTION OF THE mayfantasy.com WEB
              SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE
              REMEDY IS TO DISCONTINUE USING THE mayfantasy.com WEB SITE.
            </p>

            <p className="mb-3">SERVICE CONTACT : info@mayfantasy.com</p>

            <h2 className="mb-2">
              <strong>TERMINATION/ACCESS RESTRICTION</strong>
            </h2>

            <p className="mb-3">
              mayfantasy.com reserves the right, in its sole discretion, to
              terminate your access to the mayfantasy.com Web Site and the
              related services or any portion thereof at any time, without
              notice. GENERAL To the maximum extent permitted by law, this
              agreement is governed by the laws of Canada. and you hereby
              consent to the exclusive jurisdiction and venue of courts in
              Canada. in all disputes arising out of or relating to the use of
              the mayfantasy.com Web Site. Use of the mayfantasy.com Web Site is
              unauthorized in any jurisdiction that does not give effect to all
              provisions of these terms and conditions, including without
              limitation this paragraph. You agree that no joint venture,
              partnership, employment, or agency relationship exists between you
              and mayfantasy.com as a result of this agreement or use of the
              mayfantasy.com Web Site. mayfantasy.com performance of this
              agreement is subject to existing laws and legal process, and
              nothing contained in this agreement is in derogation of
              mayfantasy.com right to comply with governmental, court and law
              enforcement requests or requirements relating to your use of
              themayfantasy.com Web Site or information provided to or gathered
              by mayfantasy.com with respect to such use. If any part of this
              agreement is determined to be invalid or unenforceable pursuant to
              applicable law including, but not limited to, the warranty
              disclaimers and liability limitations set forth above, then the
              invalid or unenforceable provision will be deemed superseded by a
              valid, enforceable provision that most closely matches the intent
              of the original provision and the remainder of the agreement shall
              continue in effect. Unless otherwise specified herein, this
              agreement constitutes the entire agreement between the user and
              mayfantasy.com with respect to the mayfantasy.com Web Site and it
              supersedes all prior or contemporaneous communications and
              proposals, whether electronic, oral or written, between the user
              and mayfantasy.com with respect to the mayfantasy.com Web Site. A
              printed version of this agreement and of any notice given in
              electronic form shall be admissible in judicial or administrative
              proceedings based upon or relating to this agreement to the same
              extent an d subject to the same conditions as other business
              documents and records originally generated and maintained in
              printed form. It is the express wish to the parties that this
              agreement and all related documents be drawn up in English.
            </p>

            <h2 className="mb-2">
              <strong>COPYRIGHT AND TRADEMARK NOTICES:</strong>
            </h2>

            <p className="mb-3">
              All contents of the mayfantasy.com Web Site are: 2011 and/or its
              suppliers. All rights reserved.
            </p>

            <h2 className="mb-2">
              <strong>TRADEMARKS</strong>
            </h2>

            <p className="mb-3">
              The names of actual companies and products mentioned herein may be
              the trademarks of their respective owners.
            </p>

            <p className="mb-3">
              The example companies, organizations, products, people and events
              depicted herein are fictitious. No association with any real
              company, organization, product, person, or event is intended or
              should be inferred.
            </p>

            <p className="mb-3">
              Any rights not expressly granted herein are reserved.
            </p>

            <h2 className="mb-2">
              <strong>
                NOTICES AND PROCEDURE FOR MAKING CLAIMS OF COPYRIGHT
                INFRINGEMENT
              </strong>
            </h2>

            <p className="mb-3">
              Notifications of claimed copyright infringement under Canadian
              copyright law should be sent to Service Provider's Designated
              Agent. ALL INQUIRIES NOT RELEVANT TO THE FOLLOWING PROCEDURE WILL
              RECEIVE NO RESPONSE. See Notice and Procedure for Making Claims of
              Copyright Infringement.
            </p>
          </article>
          <br />
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}

export default TermsPage
