import React from 'react'
import BlogListItem from './components/BlogListItem'

export default function BlogList() {
  return (
    <div>
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <BlogListItem image="https://www.fabhotels.com/blog/wp-content/uploads/2022/08/600X400-WPD-min.jpg" title=" Leveraging Influencers for Brand Promotion" description="In today's digital age, traditional advertising methods are no longer as effective in capturing the attention and trust of consumers." />
                </div>
                <div className='col-md-4'>
                    <BlogListItem image="https://balajitravelschennai.com/blog/wp-content/uploads/2019/09/travelling-alone-2.jpg" title="Compliance with Regulations and Disclosure" description="It is important to adhere to the regulations and guidelines set by regulatory bodies and social media platforms." />
                </div>
                <div className='col-md-4'>
                    <BlogListItem image="https://storage.googleapis.com/cig-shared/prod/bmd/main/web/2021/07/674aa4be-company-travel-600x400-1.jpg" title="Micro-Influencers and Niche Markets" description="While macro-influencers with large followings are often sought after, don’t overlook the power of micro-influencers within niche markets." />
                </div>
            </div>
        </div>
    </div>
  )
}
