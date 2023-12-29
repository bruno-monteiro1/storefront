import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface AboutDecoProps {
  title?: string;
  /** @format html */
  description?: string;
  image?: {
    srcMobile?: ImageWidget;
    srcDesktop?: ImageWidget;
  };
}

export default function AboutDeco(
  {
    title = "Title",
    description = "Description",
    image = {
      srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/3983f8b7-31a1-4e26-a2bb-3d7261a34265",
      srcDesktop: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2177/3983f8b7-31a1-4e26-a2bb-3d7261a34265",
    },
  }: AboutDecoProps,
) {
  return (
    <div class="bg-base-content w-full">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center py-5 md:py-10">
        <div class="flex flex-col gap-4 ">
          <p class="text-base-100 font-semibold text-[40px] md:text-[56px]">
            {title}
          </p>
          <div class="text-base-100 md:text-[24px] md:leading-8">
            {description && (
              <p dangerouslySetInnerHTML={{ __html: description }} />
            )}
          </div>
        </div>
        <div>
          <Picture>
            <Source
              media="(max-width: 767px)"
              src={image?.srcMobile ?? ""}
              width={181.5}
              height={174.75}
            />
            <Source
              media="(min-width: 768px)"
              src={image?.srcDesktop ?? ""}
              width={228}
              height={219.5}
            />
            <img
              class="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image?.srcMobile ?? ""}
              alt={title ?? ""}
              decoding="async"
              loading="lazy"
            />
          </Picture>
        </div>
      </div>
    </div>
  );
}
