interface Props {
  review: string;
  reviewerName: string;
}
export default function Testimonial(props: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-8 sm:py-12 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img alt="" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" className="mx-auto h-12" /> */}
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              {props.review}
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{props.reviewerName}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
