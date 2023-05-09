import React, { useEffect, useState } from 'react'
import './Reviews.css'
import { AiFillStar } from 'react-icons/ai'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import { getUserReviews } from '../../Services/api'

const Reviews = (props) => {
    const [productReviewData, setProductReviewData] = useState([])
    const { id } = useParams()
    var stars = 3

    useEffect(() => {
        loadSingleData()
    }, [])

    const loadSingleData = async () => {
        const response = await getUserReviews(id)
        console.log(response.data)
        setProductReviewData(response.data)
    }

    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"

    }

    return (
        <div>
            <section id="testimonials">
                {/* heading */}
                <div className="testimonial-heading">
                    <span>Reviews</span>
                    <h1>Product Reviews</h1>
                </div>

                {/* testimonials-box-container */}
                <div className="testimonial-box-container">

                    {/* BOX-1 */}
                    {productReviewData.map((userReviews) =>
                        <div className="testimonial-box" key={userReviews._id}>
                            {/* top */}
                            <div className="box-top">
                                {/* profile */}
                                <div className="profile">

                                    {/* name */}
                                    <div className="name-user">
                                        <strong>{userReviews.Name}</strong>

                                    </div>
                                </div>
                                {/* reviews */}

                                <div className="reviews">
                                    {userReviews.Stars == 0 ?
                                        <i className="">
                                            <AiFillStar color={colors.grey} />
                                            <AiFillStar color={colors.grey} />
                                            <AiFillStar color={colors.grey} />
                                            <AiFillStar color={colors.grey} />
                                            <AiFillStar color={colors.grey} />
                                        </i>
                                        : null
                                    }

                                    {userReviews.Stars == 1 ?
                                        <i className="">
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.grey} />
                                            <AiFillStar color={colors.grey} />
                                            <AiFillStar color={colors.grey} />
                                            <AiFillStar color={colors.grey} />
                                        </i>
                                        : null
                                    }


                                    {userReviews.Stars == 2 ?
                                        <i className="">
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.grey} />
                                            <AiFillStar color={colors.grey} />
                                            <AiFillStar color={colors.grey} />
                                        </i>
                                        : null
                                    }

                                    {userReviews.Stars == 3 ?
                                        <i className="">
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.grey} />
                                            <AiFillStar color={colors.grey} />
                                        </i>
                                        : null
                                    }

                                    {userReviews.Stars == 4 ?
                                        <i className="">
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.grey} />
                                        </i>
                                        : null
                                    }

                                    {userReviews.Stars == 5 ?
                                        <i className="">
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.orange} />
                                            <AiFillStar color={colors.orange} />
                                        </i>
                                        : null
                                    }


                                </div>
                            </div>
                            {/* Comments */}
                            <div className="client-comment">
                                <p>{userReviews.Feedback}</p>
                            </div>
                        </div>
                    )}
                </div>

            </section>
        </div>
    )
}

export default Reviews
