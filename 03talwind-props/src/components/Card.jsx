import React from 'react'

export default function Card(props) {
  return (
    <div className="mx-auto pt-8 max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={props.cardDetails.imgSrc} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.cardDetails.heading}</div>
    <p className="text-gray-700 text-base">
        {props.cardDetails.body}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
  )
}
