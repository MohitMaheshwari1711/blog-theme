import React, { useState, useEffect } from 'react';

import db from '../firebase';
import Card from './Card/Card';
import Paginator from './Paginator/Paginator';


function Index() {

    const [pageInfo, changepageInfo] = useState({
        offset: 0,
        data: [],
        perPage: 4,
        currentPage: 0,
        pageCount: 0,
        slicedBlog: null,
    });

    const receivedData = (offset, perPage) => {
        db.collection("blogs").get().then(
            querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                console.log(data)
                let pageCount = Math.ceil(data.length / perPage);
                let slicedData = data.slice(offset, offset + perPage);
                changepageInfo({
                    ...pageInfo,
                    pageCount: pageCount,
                    slicedBlog: slicedData
                });
            }
        )
    }

    const handlePageClick = (e) => {
        let selectedPage = e.selected;
        let newOffset = selectedPage * pageInfo.perPage;

        receivedData(newOffset, pageInfo.perPage);
    };


    useEffect(() => {
        receivedData(pageInfo.offset, pageInfo.perPage)
    }, []);


    return (
        <React.Fragment>
            <section className="headline">
            </section>
            <section className="features">
                {
                    pageInfo.slicedBlog ? pageInfo.slicedBlog.map(
                        blog => <React.Fragment key={blog.id}>
                            <Card title={blog.title} userImage={blog.userImage} thumbnailUrl={blog.thumbnailUrl} subtitle={blog.subtitle} date={blog.date} id={blog.id} details={blog.details} username={blog.username} />
                        </React.Fragment>
                    ) : <p>The content is being loaded</p>
                }
            </section>
            {
                pageInfo.pageCount === 0 ? <p>deded</p> : <Paginator onPageChange={handlePageClick} pageCount={pageInfo.pageCount} />
            }
        </React.Fragment>
    );
}

export default Index;

