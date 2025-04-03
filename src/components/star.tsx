function Star({ type }: { type: string }) {
    switch (type) {
        case "full":
            return (
                <div className="flex h-[18px] w-[18px] items-center justify-center">
                    <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                            fill="#FCE91B"
                        />
                    </svg>
                </div>
            )
        case "half":
            return (
                <div className="flex h-[18px] w-[18px] items-center justify-center">
                    <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask
                            id="mask0_7887_1376"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="15"
                        >
                            <path
                                d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                fill="#FCE91B"
                            />
                        </mask>
                        <g mask="url(#mask0_7887_1376)">
                            <rect
                                y="0.5"
                                width="8"
                                height="18"
                                fill="#FCE91B"
                            />
                            <rect
                                x="8"
                                y="0.5"
                                width="8"
                                height="18"
                                fill="#3A3541"
                                fill-opacity="0.12"
                            />
                        </g>
                    </svg>
                </div>
            )
        case "empty":
            return (
                <div className="flex h-[18px] w-[18px] items-center justify-center">
                    <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                            fill="#3A3541"
                            fillOpacity="0.12"
                        />
                    </svg>
                </div>
            )
        default:
            return null
    }
}

export function StarRating({ rating }: { rating: number }) {
    const fullStars = Math.floor(rating) // Jumlah bintang penuh
    const hasHalfStar = rating % 1 >= 0.5 // Apakah ada setengah bintang
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0) // Bintang kosong

    return (
        <div className="flex items-center justify-center">
            {Array(fullStars)
                .fill(0)
                .map((_, index) => (
                    <Star key={`full-${index}`} type="full" />
                ))}
            {hasHalfStar && <Star type="half" />}
            {Array(emptyStars)
                .fill(0)
                .map((_, index) => (
                    <Star key={`empty-${index}`} type="empty" />
                ))}
        </div>
    )
}
