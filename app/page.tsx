export const metadata = {
  title: "Mason's Yard Care | Landscaping in Reno, NV",
  description:
    "Landscape construction, maintenance, tree and brush work, and snow removal across the Reno area.",
};

const estimateHref = "tel:+17752293541";

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Mason's Yard Care home">
          <span className="brandMark">M</span>
          <span>
            <strong>Mason&apos;s</strong>
            <small>Yard Care</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button buttonSmall" href={estimateHref}>
          Get a Free Estimate
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroImage">
          <img
            src="/images/landscape-construction_jpg-ed7f2d39f6.jpg"
            alt="Finished landscape construction project in Reno"
          />
        </div>
        <div className="heroContent">
          <p className="eyebrow">Built for Northern Nevada</p>
          <h1>Make more of the ground you call home.</h1>
          <p className="heroCopy">
            Thoughtful landscape construction and dependable property care,
            shaped for Reno&apos;s seasons and built around the way you live.
          </p>
          <div className="heroActions">
            <a className="button" href={estimateHref}>
              Get a Free Estimate
            </a>
            <span>
              Call Mason directly
              <strong>(775) 229-3541</strong>
            </span>
          </div>
        </div>
        <div className="heroTag" aria-hidden="true">
          <span>Reno</span>
          <span>Sparks</span>
          <span>Northern Nevada</span>
        </div>
      </section>

      <section className="proofBar" aria-label="Why choose Mason's Yard Care">
        <div>
          <span>01</span>
          <p><strong>Real local reviews</strong>Active Yelp listings in Reno &amp; Sparks</p>
        </div>
        <div>
          <span>02</span>
          <p><strong>Work you can see</strong>A photographed portfolio of completed projects</p>
        </div>
        <div>
          <span>03</span>
          <p><strong>Easy to get started</strong>Free estimates &amp; online scheduling</p>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="sectionIntro">
          <p className="eyebrow">From first dig to final detail</p>
          <h2>One crew.<br />Every season.</h2>
          <p>
            Practical solutions for high-desert properties, delivered with
            direct communication and a sharp eye for the finish.
          </p>
          <a className="textLink" href={estimateHref}>Get a Free Estimate <span>↗</span></a>
        </div>
        <div className="serviceVisual">
          <img
            src="/images/img_5662-1-_jpg-e7491b3f5c.jpg"
            alt="Mason's Yard Care landscaping work"
          />
          <div className="serviceList">
            <article><b>01</b><h3>Landscape construction</h3><p>Outdoor spaces built to look right, drain well, and last.</p></article>
            <article><b>02</b><h3>Landscape maintenance</h3><p>Consistent care that keeps your property clean and healthy.</p></article>
            <article><b>03</b><h3>Land, tree &amp; brush</h3><p>Clearing, trimming, and management for safer open ground.</p></article>
            <article><b>04</b><h3>Snow removal</h3><p>Reliable winter access when Northern Nevada turns white.</p></article>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="workHeading">
          <div>
            <p className="eyebrow">Proof, not promises</p>
            <h2>Made in Reno.<br />Made to be used.</h2>
          </div>
          <p>
            Our portfolio documents completed landscape construction,
            maintenance, and property-care projects across the Reno area.
          </p>
        </div>
        <div className="gallery">
          <figure className="galleryOne">
            <img src="/images/img_8330-fab554d0a5.jpg" alt="Completed Reno landscaping project" />
            <figcaption><span>Landscape construction</span><b>Reno, Nevada</b></figcaption>
          </figure>
          <figure className="galleryTwo">
            <img src="/images/e8bf3f0b-6cea-40b0-9372-a27f9ed93a1d-17d0a149b6.jpg" alt="Finished yard project by Mason's Yard Care" />
            <figcaption><span>Property care</span><b>Northern Nevada</b></figcaption>
          </figure>
          <figure className="galleryThree">
            <img src="/images/img_7890-7ff9e8a2f6.jpg" alt="Detailed view of a completed landscape project" />
            <figcaption><span>General landscaping</span><b>Reno area</b></figcaption>
          </figure>
        </div>
        <a className="button workButton" href={estimateHref}>Get a Free Estimate</a>
      </section>

      <section className="about section" id="about">
        <div className="aboutImage">
          <img
            src="/images/503429_265e3e1e1f1b49fa8bf707b547915008f000-7ef7f80f54.jpg"
            alt="Mason from Mason's Yard Care"
          />
          <div className="stamp"><span>Local care</span><strong>775</strong><span>Direct line</span></div>
        </div>
        <div className="aboutCopy">
          <p className="eyebrow">A local call, answered locally</p>
          <h2>Your yard isn&apos;t a work order.</h2>
          <p className="lead">
            It&apos;s the first thing you see when you come home. Mason&apos;s Yard
            Care brings personal service to every property, from the first
            conversation to the final clean-up.
          </p>
          <div className="aboutFacts">
            <p><strong>Talk to Mason</strong>Personally available by phone, 8am–5pm</p>
            <p><strong>Weekday hours</strong>Monday–Friday, 7am–6pm</p>
            <p><strong>Local reputation</strong>Find and review us on Yelp in Reno and Sparks</p>
          </div>
          <a className="button darkButton" href={estimateHref}>Get a Free Estimate</a>
        </div>
      </section>

      <section className="estimate section">
        <div className="estimateCopy">
          <p className="eyebrow">No upfront commitment</p>
          <h2>A better yard starts with a free conversation.</h2>
          <p>
            Tell us what your property needs. Free quotes and direct scheduling
            make it simple to understand the work before you commit.
          </p>
          <ul>
            <li><span>✓</span> Free estimate</li>
            <li><span>✓</span> Online scheduling available</li>
            <li><span>✓</span> Direct access to a local owner</li>
          </ul>
          <a className="button" href={estimateHref}>Get a Free Estimate</a>
        </div>
        <div className="estimateImage">
          <img
            src="/images/676ea0_31562f11c5ab416280fb31d211dad1fc-mv2-67c71f3306.jpg"
            alt="Mason's Yard Care project collage"
          />
          <blockquote>“Built around your property, your priorities, and your budget.”</blockquote>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="faqSide">
          <img src="/images/remove-background-project-7268bc099a.png" alt="Mason's Yard Care logo" />
          <p className="eyebrow">Good ground starts here</p>
          <h2>A few things to know.</h2>
          <a className="textLink lightLink" href={estimateHref}>Get a Free Estimate <span>↗</span></a>
        </div>
        <div className="questions">
          <details open>
            <summary>What areas do you serve?<span>+</span></summary>
            <p>We serve homeowners and properties throughout Reno, Sparks, and the surrounding Northern Nevada area.</p>
          </details>
          <details>
            <summary>What kind of work do you take on?<span>+</span></summary>
            <p>Landscape construction and maintenance, land and brush work, tree services, and seasonal snow removal.</p>
          </details>
          <details>
            <summary>Does an estimate cost anything?<span>+</span></summary>
            <p>No. Estimates and quotes are free, so you can understand the scope before making a commitment.</p>
          </details>
          <details>
            <summary>How quickly can I get in touch?<span>+</span></summary>
            <p>Call (775) 229-3541 during weekday hours. Mason is personally available by phone from 8am to 5pm.</p>
          </details>
        </div>
      </section>

      <section className="finalCta">
        <p className="eyebrow">Your property, ready for what&apos;s next</p>
        <h2>Let&apos;s put good ground<br />beneath your plans.</h2>
        <a className="button finalButton" href={estimateHref}>Get a Free Estimate</a>
        <span className="outlineWord" aria-hidden="true">RENO</span>
      </section>

      <footer>
        <div className="footerBrand">
          <span className="brandMark">M</span>
          <p><strong>Mason&apos;s Yard Care</strong>Quality landscaping in Reno, Nevada.</p>
        </div>
        <div><small>Call</small><a href="tel:+17752293541">(775) 229-3541</a></div>
        <div><small>Email</small><a href="mailto:scheduling@mycreno.com">scheduling@mycreno.com</a></div>
        <div><small>Hours</small><p>Mon–Fri, 7am–6pm</p></div>
        <p className="copyright">© 2026 Mason&apos;s Yard Care</p>
      </footer>

      <style>{`
        :root { --ink:#17352b; --moss:#315d42; --lime:#dce76c; --sand:#eee9dc; --cream:#f8f5ed; --rust:#b85636; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--cream); color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; text-decoration:none; }
        img { display:block; width:100%; height:100%; object-fit:cover; }
        .nav { height:88px; padding:0 4vw; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid rgba(23,53,43,.18); position:relative; z-index:4; background:var(--cream); }
        .brand { display:flex; align-items:center; gap:11px; text-transform:uppercase; letter-spacing:.08em; }
        .brandMark { width:38px; height:38px; border-radius:50% 50% 44% 56%; display:grid; place-items:center; background:var(--ink); color:var(--lime); font:700 20px Georgia,serif; transform:rotate(-5deg); }
        .brand strong,.brand small { display:block; line-height:1.05; }
        .brand strong { font-size:14px; } .brand small { font-size:9px; margin-top:4px; }
        nav { display:flex; gap:34px; font-size:13px; font-weight:700; }
        nav a:hover { color:var(--rust); }
        .button { display:inline-flex; min-height:55px; padding:0 25px; align-items:center; justify-content:center; background:var(--lime); color:var(--ink); border:1px solid var(--ink); font-size:12px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; box-shadow:5px 5px 0 var(--ink); transition:.2s; }
        .button:hover { transform:translate(3px,3px); box-shadow:2px 2px 0 var(--ink); }
        .buttonSmall { min-height:44px; box-shadow:none; }
        .hero { min-height:720px; display:grid; grid-template-columns:52% 48%; position:relative; background:var(--sand); overflow:hidden; }
        .heroImage { min-height:720px; clip-path:polygon(0 0,93% 0,100% 100%,0 100%); }
        .heroImage img { filter:saturate(.75) contrast(1.05); }
        .heroContent { padding:105px 7vw 90px 5vw; display:flex; flex-direction:column; justify-content:center; position:relative; z-index:2; }
        .eyebrow { font-size:11px; text-transform:uppercase; letter-spacing:.22em; font-weight:800; margin:0 0 23px; display:flex; align-items:center; gap:12px; }
        .eyebrow:before { content:''; width:34px; height:2px; background:var(--rust); }
        h1,h2 { font-family:Georgia, 'Times New Roman', serif; font-weight:400; letter-spacing:-.045em; margin:0; line-height:.93; }
        h1 { font-size:clamp(58px,6.3vw,102px); max-width:700px; }
        h2 { font-size:clamp(45px,5.2vw,78px); }
        .heroCopy { max-width:520px; font-size:18px; line-height:1.6; margin:34px 0; color:#3f554d; }
        .heroActions { display:flex; align-items:center; gap:30px; }
        .heroActions span { font-size:11px; text-transform:uppercase; letter-spacing:.1em; }
        .heroActions strong { display:block; font-size:15px; margin-top:6px; letter-spacing:0; }
        .heroTag { position:absolute; bottom:25px; left:4vw; color:white; display:flex; gap:22px; text-transform:uppercase; font-size:10px; letter-spacing:.14em; z-index:2; }
        .heroTag span+span:before { content:'•'; margin-right:22px; color:var(--lime); }
        .proofBar { min-height:125px; background:var(--ink); color:white; display:grid; grid-template-columns:repeat(3,1fr); padding:0 4vw; }
        .proofBar>div { display:flex; gap:18px; align-items:center; padding:25px 3vw; border-right:1px solid rgba(255,255,255,.16); }
        .proofBar>div:last-child { border:0; }
        .proofBar>div>span { color:var(--lime); font:italic 24px Georgia,serif; }
        .proofBar p { margin:0; font-size:12px; line-height:1.5; color:#bfcac5; }
        .proofBar strong { display:block; color:white; font-size:14px; margin-bottom:3px; }
        .section { padding:120px 6vw; }
        .services { display:grid; grid-template-columns:32% 68%; gap:6vw; overflow:hidden; }
        .sectionIntro { padding-top:20px; }
        .sectionIntro>p:not(.eyebrow) { line-height:1.7; color:#587067; max-width:340px; margin:30px 0; }
        .textLink { display:inline-flex; gap:25px; align-items:center; border-bottom:1px solid currentColor; padding:8px 0; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:.1em; }
        .textLink span { font-size:20px; }
        .serviceVisual { display:grid; grid-template-columns:48% 52%; min-height:650px; }
        .serviceVisual>img { min-height:650px; }
        .serviceList { background:var(--sand); }
        .serviceList article { padding:28px 32px; min-height:25%; border-bottom:1px solid #cbc4b4; display:grid; grid-template-columns:35px 1fr; column-gap:12px; align-content:center; }
        .serviceList article:last-child { border:0; }
        .serviceList b { color:var(--rust); font:italic 15px Georgia,serif; grid-row:1/3; }
        .serviceList h3 { font:400 23px Georgia,serif; margin:0 0 8px; }
        .serviceList p { margin:0; color:#607269; font-size:13px; line-height:1.5; }
        .work { background:var(--moss); color:white; position:relative; }
        .workHeading { display:flex; justify-content:space-between; align-items:end; margin-bottom:70px; }
        .workHeading>p { width:330px; color:#d0dad4; line-height:1.7; margin:0; }
        .work .eyebrow:before { background:var(--lime); }
        .gallery { display:grid; grid-template-columns:1.05fr .8fr 1fr; gap:25px; align-items:start; }
        figure { margin:0; }
        .gallery figure img { height:500px; }
        .galleryTwo { margin-top:85px; }
        .galleryTwo img { height:380px!important; }
        .galleryThree { margin-top:-30px; }
        figcaption { padding:17px 0; display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,.25); font-size:10px; text-transform:uppercase; letter-spacing:.12em; }
        figcaption b { color:var(--lime); }
        .workButton { margin-top:55px; }
        .about { display:grid; grid-template-columns:47% 53%; padding-bottom:0; }
        .aboutImage { min-height:700px; position:relative; }
        .aboutImage img { filter:saturate(.8); }
        .stamp { position:absolute; width:140px; height:140px; border-radius:50%; background:var(--lime); right:-70px; top:80px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--ink); border:1px solid var(--ink); transform:rotate(7deg); }
        .stamp span { text-transform:uppercase; font-size:8px; letter-spacing:.16em; }
        .stamp strong { font:38px Georgia,serif; margin:4px; }
        .aboutCopy { padding:80px 7vw 80px 10vw; background:var(--sand); }
        .aboutCopy .lead { font:21px/1.6 Georgia,serif; color:#435a50; }
        .aboutFacts { margin:35px 0; display:grid; grid-template-columns:1fr 1fr; gap:22px; }
        .aboutFacts p { font-size:12px; line-height:1.5; margin:0; color:#576b62; }
        .aboutFacts strong { display:block; color:var(--ink); margin-bottom:5px; font-size:13px; }
        .darkButton { background:var(--ink); color:white; box-shadow:5px 5px 0 var(--lime); }
        .estimate { display:grid; grid-template-columns:48% 52%; gap:8vw; align-items:center; }
        .estimateCopy>p:not(.eyebrow) { max-width:530px; line-height:1.7; color:#566d63; margin:32px 0; }
        .estimate ul { list-style:none; padding:0; margin:0 0 38px; display:grid; gap:14px; font-size:13px; font-weight:700; }
        .estimate li span { display:inline-grid; place-items:center; width:21px; height:21px; border-radius:50%; background:var(--lime); margin-right:10px; }
        .estimateImage { height:590px; position:relative; padding:30px 0 0 30px; }
        .estimateImage:before { content:''; position:absolute; inset:0 30px 30px 0; border:1px solid var(--rust); }
        .estimateImage img { position:relative; }
        blockquote { position:absolute; bottom:-25px; left:-45px; width:290px; margin:0; background:var(--rust); color:white; padding:30px; font:italic 20px/1.4 Georgia,serif; }
        .faq { background:var(--ink); color:white; display:grid; grid-template-columns:38% 62%; gap:9vw; }
        .faqSide>img { width:92px; height:92px; object-fit:contain; margin-bottom:60px; }
        .faqSide h2 { margin-bottom:45px; }
        .lightLink { color:var(--lime); }
        details { border-top:1px solid rgba(255,255,255,.25); padding:27px 0; }
        details:last-child { border-bottom:1px solid rgba(255,255,255,.25); }
        summary { list-style:none; cursor:pointer; display:flex; justify-content:space-between; font:24px Georgia,serif; }
        summary::-webkit-details-marker { display:none; }
        summary span { color:var(--lime); font:24px Arial,sans-serif; }
        details p { color:#b9c8c1; line-height:1.7; max-width:600px; font-size:14px; }
        .finalCta { min-height:600px; display:flex; flex-direction:column; align-items:center; text-align:center; justify-content:center; position:relative; overflow:hidden; background:var(--lime); padding:80px 20px; }
        .finalCta .eyebrow:before { display:none; }
        .finalCta h2 { font-size:clamp(55px,7vw,105px); position:relative; z-index:1; }
        .finalButton { margin-top:40px; background:var(--ink); color:white; box-shadow:5px 5px 0 var(--rust); position:relative; z-index:2; }
        .outlineWord { position:absolute; font-size:33vw; font-weight:900; line-height:1; color:transparent; -webkit-text-stroke:1px rgba(23,53,43,.12); letter-spacing:-.08em; top:50%; transform:translateY(-50%); }
        footer { background:#0e251e; color:white; min-height:230px; padding:55px 4vw 30px; display:grid; grid-template-columns:2fr repeat(3,1fr); gap:35px; align-items:start; position:relative; }
        .footerBrand { display:flex; gap:16px; align-items:center; }
        .footerBrand p { font-size:11px; color:#9eb0a8; line-height:1.5; }
        .footerBrand strong { display:block; color:white; font-size:14px; }
        footer small { display:block; color:#81968d; text-transform:uppercase; letter-spacing:.16em; margin-bottom:10px; }
        footer a,footer>div>p { font-size:13px; margin:0; }
        .copyright { position:absolute; bottom:20px; right:4vw; color:#667b72; font-size:10px; }
        @media(max-width:900px) {
          .nav { height:74px; } nav { display:none; } .buttonSmall { font-size:9px; padding:0 12px; min-height:40px; }
          .hero { grid-template-columns:1fr; min-height:auto; } .heroImage { height:52vh; min-height:430px; clip-path:none; order:2; } .heroContent { padding:75px 7vw; order:1; } .heroTag { bottom:18px; }
          .proofBar { grid-template-columns:1fr; padding:20px 6vw; } .proofBar>div { border-right:0; border-bottom:1px solid rgba(255,255,255,.16); padding:18px 0; }
          .section { padding:85px 6vw; } .services { grid-template-columns:1fr; } .sectionIntro { margin-bottom:20px; } .serviceVisual { grid-template-columns:1fr; } .serviceVisual>img { min-height:480px; height:480px; }
          .gallery { grid-template-columns:1fr 1fr; } .galleryThree { margin-top:20px; } .gallery figure img { height:430px; } .workHeading { align-items:start; gap:30px; }
          .about { grid-template-columns:1fr; padding-bottom:0; } .aboutImage { min-height:560px; } .stamp { right:25px; top:auto; bottom:-70px; } .aboutCopy { padding:120px 7vw 80px; }
          .estimate { grid-template-columns:1fr; } .estimateImage { margin-top:20px; }
          .faq { grid-template-columns:1fr; } .faqSide>img { margin-bottom:35px; }
          footer { grid-template-columns:1fr 1fr; padding-bottom:70px; }
        }
        @media(max-width:600px) {
          .brand small { display:none; } .brandMark { width:34px; height:34px; } .nav { padding:0 4vw; }
          h1 { font-size:54px; } h2 { font-size:44px; } .heroContent { padding:60px 6vw; } .heroCopy { font-size:16px; } .heroActions { align-items:flex-start; flex-direction:column; }
          .heroImage { min-height:360px; height:44vh; } .heroTag { left:6vw; gap:8px; font-size:8px; } .heroTag span+span:before { margin-right:8px; }
          .serviceVisual>img { min-height:390px; height:390px; } .serviceList article { padding:24px 20px; }
          .workHeading { display:block; } .workHeading>p { width:auto; margin-top:25px; } .gallery { grid-template-columns:1fr; } .galleryTwo,.galleryThree { margin-top:20px; } .galleryTwo img { height:430px!important; }
          .aboutImage { min-height:450px; } .aboutFacts { grid-template-columns:1fr; } .aboutCopy { padding-left:6vw; padding-right:6vw; }
          .estimateImage { height:440px; padding:18px 0 0 18px; } blockquote { left:-10px; width:260px; padding:22px; font-size:17px; }
          .faq { gap:55px; } summary { font-size:19px; gap:20px; }
          .finalCta { min-height:520px; } footer { grid-template-columns:1fr; } .copyright { left:4vw; right:auto; }
        }
      `}</style>
    </main>
  );
}
