"use client"
import React, { useState, ChangeEvent } from "react";
import {useTranslations} from 'next-intl';

interface ThumbnailOption {
  resolution: string;
  url: string;
}



export default function YoutubeForm() {
  const [videoURL, setVideoURL] = useState<string>("");
  const [thumbnailOptions, setThumbnailOptions] = useState<ThumbnailOption[]>([]);
  const t = useTranslations('YoutubeForm');

  const getYouTubeThumbnail = (url: string): void => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD Image (1280x720)", code: "maxresdefault" },
        { resolution: "SD Image (640x480)", code: "sddefault" },
        { resolution: "Normal Image (480x360)", code: "hqdefault" },
        { resolution: "Medium Image (320x180)", code: "mqdefault" },
        { resolution: "Low Image(120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setVideoURL(e.target.value);
  };



  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder={t('enter-url')}
          value={videoURL}
          onChange={handleInputChange}
        />
        
        <button
          className="btn-red mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          {t('btn-download')}
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <div className="mb-2" >{option.resolution}</div>
               
                <a className="btn-blue " target="_blank" rel="noopener noreferrer"  href={option.url} download>Download image</a>
                <div className="mt-2 flex justify-center items-center pt-2">
                  <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
