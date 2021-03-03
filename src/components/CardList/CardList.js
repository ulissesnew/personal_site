import React from 'react'
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({items}) => {
    return (
        <div className="card-list">
            {items.map((item, id) => {
                const {title, category, imgUrl,url} = item;
                return <Card key={id} 
                        category={category}
                        title={title}
                        imgUrl={imgUrl}
                        link={url} 
                      />
            })}
        </div>
    )
}
export  default CardList