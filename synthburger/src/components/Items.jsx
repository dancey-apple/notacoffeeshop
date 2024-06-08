import MenuCards from "./Menu";

function Menu() {    
    const items = [
        {
        item: 'OG Burger',
        discription: 'The classic burger with lettuce, tomato, and onion.',
        price: '$5.99',
        imageUrl: 'https://github.com/dancey-apple/imageLibrary/blob/main/synthburger.png?raw=true'
        },
        {
        item: 'Double Bacon Burger',
        discription: 'Double the bacon, double the fun.',
        price: '$7.99',
        imageUrl: 'https://github.com/dancey-apple/imageLibrary/blob/main/synthbacon.png?raw=true'
        },
        {
        item: 'Veggie Burger',
        discription: 'A meatless patty with all the fixings.',
        price: '$6.99',
        imageUrl: 'https://github.com/dancey-apple/imageLibrary/blob/main/synthveggie.png?raw=true'
        },
        {
        item: 'Fries',
        discription: 'Crispy and golden brown.',
        price: '$2.99',
        imageUrl: 'https://github.com/dancey-apple/imageLibrary/blob/main/synthfries.png?raw=true'
        },
        {
        item: 'Onion Rings',
        discription: 'Crispy and delicious.',
        price: '$3.99',
        imageUrl: 'https://github.com/dancey-apple/imageLibrary/blob/main/synthrings.png?raw=true'
        },
        {
        item: 'Milkshake',
        discription: 'A sweet treat to cool you down.',
        price: '$4.99',
        imageUrl: 'https://github.com/dancey-apple/imageLibrary/blob/main/synthshake.png?raw=true'
        },
        {
        item: 'Soda',
        discription: 'A refreshing drink.',
        price: '$1.99',
        imageUrl: 'https://github.com/dancey-apple/imageLibrary/blob/main/synthdrink.png?raw=true'
        },
        {
            item: 'T-Shirt',
            discription: 'It looks pretty rad. You should buy it.',
            price: '$19.99',
            imageUrl: 'https://github.com/dancey-apple/imageLibrary/blob/main/Tshirt.png?raw=true'
        },
        {
            item: 'Hat',
            discription: 'Tubular Trucker Cap. You know you want it.',
            price: '$14.99',
            imageUrl: 'https://github.com/dancey-apple/imageLibrary/blob/main/Hat.png?raw=true'
        },
        {
            item: 'Mug',
            discription: "You don't HAVE to put coffee in it.",
            price: '$9.99',
            imageUrl: 'https://github.com/dancey-apple/imageLibrary/blob/main/Mug.png?raw=true'
        }
    ];

    return (
        <div className='menu'>
            {items.map((items, index) => (
                <MenuCards 
                    key={index}
                    item={items.item}
                    discription={items.discription}
                    price={items.price}
                    imageUrl={items.imageUrl}
                />
            ))}
        </div>
    );
}

export default Menu;