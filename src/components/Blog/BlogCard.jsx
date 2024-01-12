import { Link } from 'react-router-dom';

function BlogCard(props) {
  return (
    <Link to={`/pages/${props.product.slug}`}>
      <div className="group cursor-pointer">
        <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
          <div className="relative block aspect-square">
            <img alt="Thumbnail" fetchpriority="high" decoding="async" data-nimg="fill" className="object-cover transition-all" sizes="(max-width: 768px) 30vw, 33vw" src={props.product.image.url} style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}}/>
          </div>
        </div>
      <div className="">
        <div>
          <div className="flex gap-3">
            {/* {props.tags.map((tag) => (
              <div key={tag.id}>
                <Link to={`/pages/categories/${tag.name}`}>
                  <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">{tag.name}</span>
                </Link> 
              </div>
            ))} */}
            {/* <a href="/category/technology"> */}
              <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">{props.product.category}</span>
            {/* </a> */}
          </div>
          <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
            {/* <a href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration"> */}
              <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                {props.product.instructions}
              </span>
            {/* </a> */}
          </h2>
          {/* <div className="hidden">
            <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
              <a href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration">Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades</a>
            </p>
          </div> */}
          <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            

            {/* HARDCODED */}
            {/* <a href="/author/mario-sanchez"> */}
              <div className="flex items-center gap-3">
                <div className="relative h-5 w-5 flex-shrink-0">
                  <img alt="Author name" loading="lazy" decoding="async" data-nimg="fill" className="rounded-full object-cover" sizes="20px" srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75" style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}}/>
                </div>
                <span className="truncate text-sm">Author Name</span>
              </div>
            {/* </a> */}
            <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
            <time className="truncate text-sm" dateTime="2022-10-21T15:48:00.000Z">October 21, 2022</time>
          
          
          </div>
        </div>
      </div>
    </div>
    {/* <div className="max-w-auto w-full p-4 md:p-6"> */}
    {/* <div className="flex justify-between">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-2xl">
        {props.product.name}
      </h1>
    </div> */}
      {/* <img src={props.product.image.url} alt="" className="rounded-md transition duration-300 hover:scale-105" />
      <div className="pt-4">
        <div className="">
          <span className="dark:text-gray-300">{props.product.info}</span>
        </div>
      </div>
    </div> */}
  </Link>
    
  );
}

export default BlogCard;
