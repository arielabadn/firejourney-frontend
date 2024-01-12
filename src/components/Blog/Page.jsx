import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { request } from "graphql-request";

const defaultProduct = {
  category: "",
  info: "",
  ingredients: "",
  instructions: "",
  image: {
    url: "",
  },
  name: "",
  author: {
    name: "",
  }
}

const Page = () => {
  const [product, setProduct] = useState(defaultProduct);
  const navigate = useNavigate();
  const { slug } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const { cocktail } = await request(
        "https://api-us-east-1.hygraph.com/v2/cl4ji8xe34tjp01yrexjifxnw/master",
        `
       {
          cocktail(where: {slug: "${slug}"}) {
             category
             info
             ingredients
             instructions
             image {
                url
             }
             name
             
          }
       }
    `
      );
      cocktail.author = {name: ""}
      setProduct(cocktail);
    };
    fetchProduct();
  }, [slug]);

  return (
    <>
      <div>
        <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
          <div className="mx-auto max-w-screen-md ">
            <div className="flex justify-center">
              <div className="flex gap-3">
                
                {/* HARDCODED */}
                {/* <a href="/category/design"> */}
                  <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">{product.category}</span>
                {/* </a> */}
                
                {/* <a href="/category/lifestyle"> */}
                  <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-purple-600">Lifestyle</span>
                {/* </a> */}
                
              </div>
            </div>

            {/* HARDCODED */}
            <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
              {product.instructions}
            </h1>
            
            <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 flex-shrink-0">
                  
                  {/* HARDCODED */}
                  {/* <a href="/author/mario-sanchez"> */}
                    <img alt={product.author.name} loading="lazy" decoding="async" data-nimg="fill" className="rounded-full object-cover" sizes="40px" srcSet={product.author.image} style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}}/>
                  {/* </a> */}

                </div>
              <div>

                {/* HARDCODED */}
                <p className="text-gray-800 dark:text-gray-400">
                  {/* <a href="/author/mario-sanchez"> */}
                    {product.author.name}
                  {/* </a>   */}
                </p>
                
                <div className="flex items-center space-x-2 text-sm">
                  
                  {/* HARDCODED */}
                  <time className="text-gray-500 dark:text-gray-400" dateTime="2022-10-21T06:05:00.000Z">October 21, 2022</time>
                  <span>· 8 min read</span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        
        {/* TODO: Change param name */}
        <img alt="Thumbnail" loading="eager" decoding="async" data-nimg="fill" className="object-cover" sizes="100vw" src={product.image.url} style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}}/>
      
      </div>
    
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <article className="mx-auto max-w-screen-md ">
        <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600 dark:text-gray-200">

<h1 className="text-brand-primary mb-3 mt-2 text-2xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">Investment Tips for Building Wealth</h1>

<p className="mb-4">Welcome to our blog dedicated to providing valuable investment tips to help you build and grow your wealth. In this post, we'll share insights and strategies that can set you on the path to financial success. Please note that while we offer guidance, it's crucial to consult with a financial advisor to tailor these tips to your specific situation.</p>

<h2 className="text-2xl font-bold mb-2 mt-6">1. Diversify Your Portfolio:</h2>
<p className="mb-4">One of the fundamental principles of successful investing is diversification. Spread your investments across various asset classes, such as stocks, bonds, real estate, and commodities, to reduce risk and enhance potential returns.</p>

<h2 className="text-2xl font-bold mb-2 mt-6">2. Set Clear Financial Goals:</h2>
<p className="mb-4">Establishing clear and achievable financial goals is crucial. Whether it's saving for retirement, purchasing a home, or funding your children's education, having defined objectives helps guide your investment decisions.</p>

<h2 className="text-2xl font-bold mb-2 mt-6">3. Invest for the Long Term:</h2>
<p className="mb-4">Patience is a virtue in investing. Focus on long-term growth rather than short-term fluctuations. This approach allows your investments to weather market volatility and benefit from compounding over time.</p>

<h2 className="text-2xl font-bold mb-2 mt-6">4. Take Advantage of Employer-Sponsored Retirement Plans:</h2>
<p className="mb-4">If your employer offers a 401(k) or similar retirement plan, take advantage of it. These accounts often come with employer contributions and tax advantages, making them powerful tools for building wealth.</p>

<h2 className="text-2xl font-bold mb-2 mt-6">5. Stay Informed:</h2>
<p className="mb-4">Keep yourself updated on market trends, economic indicators, and relevant news. Staying informed enables you to make informed decisions and adjust your investment strategy based on changing circumstances.</p>

<h2 className="text-2xl font-bold mb-2 mt-6">6. Emergency Fund is Non-Negotiable:</h2>
<p className="mb-4">Before delving into investments, ensure you have an emergency fund. Having three to six months' worth of living expenses set aside in a liquid account provides a financial safety net in unexpected situations.</p>

<h2 className="text-2xl font-bold mb-2 mt-6">7. Consistency is Key:</h2>
<p className="mb-4">Consistent contributions to your investment portfolio, even in small amounts, can accumulate over time. Set up automatic transfers to your investment accounts to maintain regular contributions.</p>

<h2 className="text-2xl font-bold mb-2 mt-6">8. Understand Risk Tolerance:</h2>
<p className="mb-4">Assess your risk tolerance before making investment decisions. Your risk tolerance influences the asset allocation in your portfolio, ensuring it aligns with your comfort level and financial goals.</p>

<h2 className="text-2xl font-bold mb-2 mt-6">9. Dollar-Cost Averaging:</h2>
<p className="mb-4">Implementing a dollar-cost averaging strategy involves regularly investing a fixed amount, regardless of market conditions. This disciplined approach helps mitigate the impact of market volatility.</p>

<h2 className="text-2xl font-bold mb-2 mt-6">10. Reinvest Dividends:</h2>
<p className="mb-4">Reinvesting dividends compounds your returns over time. Many investment vehicles offer the option to automatically reinvest dividends, allowing you to harness the power of compounding.</p>

<p className="mb-4">Remember, these tips are general guidelines, and individual circumstances vary. Consult with a financial advisor to tailor an investment strategy that aligns with your unique goals and risk tolerance. Building wealth through investments requires time, discipline, and strategic planning. Happy investing!</p>
          
          {/* HARDCODED */}
          {/* <p>However, new evidence is revealing an overlooked construct, and it may be the most crucial one of all. Researchers are calling it “experiential appreciation”, and it refers to enjoying and appreciating sensations as you experience them — a concept that you may already recognize if you’re familiar with mindfulness.</p>
          <img alt="Image" loading="lazy" width="5184" height="3348" decoding="async" data-nimg="1" className="object-cover" sizes="(max-width: 800px) 100vw, 800px" srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4b0860eea675e1ebbb0bf25fbff6db2534cfb611-5184x3348.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4b0860eea675e1ebbb0bf25fbff6db2534cfb611-5184x3348.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4b0860eea675e1ebbb0bf25fbff6db2534cfb611-5184x3348.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4b0860eea675e1ebbb0bf25fbff6db2534cfb611-5184x3348.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4b0860eea675e1ebbb0bf25fbff6db2534cfb611-5184x3348.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4b0860eea675e1ebbb0bf25fbff6db2534cfb611-5184x3348.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4b0860eea675e1ebbb0bf25fbff6db2534cfb611-5184x3348.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4b0860eea675e1ebbb0bf25fbff6db2534cfb611-5184x3348.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4b0860eea675e1ebbb0bf25fbff6db2534cfb611-5184x3348.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75" style={{color: "transparent"}}/>
            <h2>The fourth construct of meaning in life</h2>
            <p>In a 
              <a href="https://www.nature.com/articles/s41562-021-01283-6.pdf" rel="noopener" target="_blank">recently published paper</a> 
              (February 2022), researchers probed what it means to experience meaning in life. In their first study, they analyzed past survey data from over 11,000 people across 30 countries. These surveys were originally designed to assess coping strategies during the COVID-19 pandemic, but the researchers plucked out individual questions linked to meaning-in-life constructs. Here’s an example for each construct; participants had to rate their agreement with each statement or question below:
            </p>
            
            <ul>
              <li>
                Coherence: “I’ve been looking for something good in what is happening”</li><li>Purpose: “I do something productive every day”</li><li>Mattering: “I’m doing what is good for our society”
              </li>
              <li>
                Experiential appreciation: “I appreciate my life as it is right now regardless of the circumstances”
              </li>
              <li>
                Meaning in life: “In general, to what extent do you feel that what you do in your life is valuable and worthwhile?”
              </li>
            </ul>
            
            <p>The researchers analyzed the survey data, testing how each construct predicted people’s scores in the overall meaning-in-life measure. Consistent with previous research, the three traditional constructs (coherence, purpose, and mattering) all individually predicted meaning in life to some extent. The interesting part was that after accounting for those three constructs, the new fourth construct of experiential appreciation explained another significant portion of people’s meaning in life. In other words, a major ingredient in the meaning-in-life formula had been missed by previous researchers.</p>
            <p>In a second study, the researchers developed their own way to measure experiential appreciation. For the three older constructs, they pulled specialized survey questions from previously published studies. But since experiential appreciation was a newcomer, they had to formalize its meaning and how to measure it. After some careful analysis, they ended up with five survey items. Anyone who scores highly on these items is high in experiential appreciation:</p>
            
            <ol>
              <li>
                “I have great appreciation for the beauty of life.”
              </li>
              <li>
                “I take great interest in my daily activities.”
              </li>
              <li>
                “I appreciate a wide variety of experiences.”
              </li>
              <li>
                “I appreciate the little things in life.”
              </li>
              <li>
                “I tend to find myself deeply engaged in conversations with other people.”
              </li>
            </ol>
            
            <p>Using these new measures together with the standard measures for the other three constructs, the researchers sent surveys to over 1500 people in the US and China. Instead of relying on indirect questions as they did in the previous COVID survey analysis, they collected dedicated data using well-tested measures for each construct.</p>
            
            <h4>Bulletted List</h4>
            
            <ul>
              <li>
                Consistently predicted
              </li>
              <li>
                Coherence was a little
              </li>
              <li>
                Experiential appreciation
              </li>
              <li>
                Deserving place
              </li>
            </ul>
            
            <p>Once again, higher purpose, higher mattering, and higher experiential appreciation all consistently predicted higher meaning in life. The effects of coherence were a little weaker, showing significant predictive power in the Chinese sample but not the American sample. While coherence was a little shaky, experiential appreciation certainly wasn’t.</p>
            
            <p>So at least when <strong>analyzing</strong> the connections between all of these <em>concepts</em>, experiential appreciation wins a deserving place in the fight for meaning in life. But could you actually boost meaning in life by boosting experiential appreciation?</p>
            
            <p>To answer this, the researchers came up with a way to stimulate people’s experiential appreciation: they showed everyone an awe-inspiring 2-min video from the nature documentary, “Planet Earth”. Few things in life give us a deeper connection to the present moment than sights of hypnotic oceans, lush forests, and David Attenborough documentaries.</p><p>The nature manipulation worked. Following the video, people reported higher levels of experiential appreciation. More importantly, by boosting their experiential appreciation, the video also indirectly raised how much people reported feeling a sense of meaning in their life. The researchers now had evidence of a causal connection between appreciating the moment and feeling that life is valuable.</p>
            
            <h1>Takeaway tips</h1>
            
            <ul>
              <li>
                <strong>The four elements of meaning in life:</strong> Here’s a simple wheel I’ve made to visualize the four elements associated with meaning in life according to the latest evidence. Think about how each of them applies to your own life. Feelings like “meaning in life” are incredibly subjective, but model-based thinking makes them less abstract and more practical. At difficult moments, work out where your problems might lie on this wheel. Where are your strengths and where are your weaknesses?
              </li>
              <li>
                <strong>Practice experiential awareness:</strong> The studies above show that experiential awareness is an important component of meaning in life. Here are two ways to practice it in your own life:
              </li>
            </ul>
            
            <ol>
              <li>
                <strong><em>Spend time in nature</em>:</strong> Whether it’s a short walk through your local park or a bigger trip out into the wilderness, make regular time for interacting with nature. And when you can’t get out of the house, nature documentaries are a great fallback! Although the mechanisms are still unclear, there are several ways nature might benefit emotional wellbeing. For example, observing nature’s breathtaking beauty is like visiting the best art gallery on Earth. There’s a reason so many paintings represent natural scenes and landscapes. Since we evolved in the natural world, our psychology reacts to it in a profoundly positive way. Nature’s immensity also makes you feel connected to something bigger outside yourself. When you’re immersed in nature, you realize the grand world that you’re a part of. This puts some of your smaller daily problems into perspective. Finally, in nature, you’re exposed to calm and natural sensory stimulation. For city dwellers, this is a refreshing experience because the sensory stimulation you experience in a city is hectic and exhausting. Glaring ads grab your attention from the left, a pushy pedestrian grabs your attention from the right, and car horns grab your attention from everywhere else. Nature allows you to be more voluntary and relaxed about how your attention is drifting
              </li>
              <li>
                <strong><em>Learn to be mindful:</em></strong> Experiential appreciation is all about living in the moment and focusing your attention on enjoying sensations as they happen. You can practice this ability with mindfulness techniques. If you’re interested in a good meditation guide, I enjoy the <em>Waking Up</em> meditation app. If you’re looking for a short read or listen, here’s a 
                <a href="https://www.npr.org/2021/12/21/1066585316/mindfulness-meditation-with-john-kabat-zinn" rel="noopener" target="_blank">helpful NPR feature on Jon Kabat-Zinn</a> 
                — a pioneer in science-based mindfulness. Here’s a great quote from the piece: “The real meditation practice is the 24 hours itself — it’s life itself. It’s not sitting on a cushion in the cross-legged posture or lying in a yoga pose called the corpse pose or anything like that… we’re cultivating <em>that</em> so that we get more comfortable with living out <em>all</em> our moments as if they really mattered and therefore being there for them — the good ones, the bad ones, the ugly ones, the stressful ones, the difficult ones, the painful ones.”
              </li>
              
              </ol>
               */}
              </div>
                <div className="mb-7 mt-7 flex justify-center">
                  <Link className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 " to="/pages">← View all posts</Link>
                </div>
                
                <div className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
                  <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
                    <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
                      {/* HARDCODED */}
                      {/* <a href="/author/mario-sanchez"> */}
                        <img alt={product.author.name} loading="lazy" decoding="async" data-nimg="fill" className="rounded-full object-cover" sizes="96px" srcSet={product.author.image} style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}}/>
                      {/* </a> */}
                    </div>
                  
                  {/* HARDCODED */}
                  <div>
                    <div className="mb-3">
                      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">About {product.author.name}</h3>
                    </div>
                  <div>
                    <p>{product.author.name} {product.author.bio} 
                      is a Staff Engineer specialising in Frontend at 
                      {/* <a href="https://vercel.com/" rel="noopener" target="_blank"> */}
                        Vercel
                      {/* </a> */}
                      , as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple.
                    </p>
                  </div>

                  {/* HARCODED */}
                  <div className="mt-3">
                    {/* <a className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 dark:text-blue-500 " href="/author/mario-sanchez"> */}
                      View Profile
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>


      {/* <Header title={product.name} />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 pt-4 mx-2">
          <button className="dark:text-gray-300" onClick={() => navigate(-1)}>
            Go Back
          </button>

          <div> */}
      {/* <div className="title">
              <h1>{product.name}</h1>
            </div> */}
      {/* <div className="flex-container">
              {product.image && (
                <img src={product.image.url} alt="" className="cocktail-img" />
              )}
              <div className="cocktail-infos">
                <div className="row">
                  <h3 className="label">Name: </h3>
                  <p className="text">{product.name}</p>
                </div>
                <div className="row">
                  <h3 className="label">Category: </h3>
                  <p className="text">{product.category}</p>
                </div>
                <div className="row">
                  <h3 className="label">Info: </h3>
                  <p className="text">{product.info}</p>
                </div>
                <div className="row">
                  <h3 className="label">Instructions: </h3>
                  <p className="text">{product.instructions}</p>
                </div>
                <div className="row">
                  <h3 className="label">Ingredients: </h3>
                  <p className="text">{product.ingredients}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div> */}

    </>
  );
};

export default Page;
