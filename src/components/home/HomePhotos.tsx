import React from "react";
import clsx from "clsx";

function HomePhotos() {
  const photos = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=952&q=80",
      alt: "1",
      rotation: "rotate-3",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2614&q=80",
      alt: "2",
      rotation: "-rotate-2",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1547638375-ebf04735d792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      alt: "3",
      rotation: "rotate-2",
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1585027513393-a0be4781093b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      alt: "4",
      rotation: "rotate-3",
    },
    {
      id: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1641086557896-b266fd7df5b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      alt: "5",
      rotation: "-rotate-3",
    },
  ];

  return (
      <div className="-my-4 flex justify-center gap-6 py-4 md:gap-8">
        {photos.map((photo, imageIndex) => (
          <div
            key={photo.id}
            className={clsx(
              "relative aspect-[9/10] w-48 h-48 flex-none overflow-hidden rounded-xl bg-stone-400 md:w-72 md:h-72 md:rounded-2xl",
              photo.rotation
            )}
          >
            <img
              src={photo.imageUrl}
              alt={photo.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
  );
}

export default HomePhotos;
