import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div
            className="p-2 w-[12.4rem] m-2 h-[480px] bg-gray-100 hover:bg-gray-200"
            // style={{
            //     backgroundColor: '#f0f0f0',
               
            // }}
        >
            <img
                className="rounded-lg"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />

            <h3 className='my-4 font-bold'>{name}</h3>
            <h4 className='my-4'>{cuisines.join(', ')}</h4>
            <h4 className='my-4'>{avgRating} stars</h4>
            <h4 className='my-4'>{costForTwo}</h4>
            <h4 className='my-4'>{sla?.slaString} </h4>
        
        </div>
        
    );
};

export default RestaurantCard;
