import OrderedItems from "@/Model/CartModel";

export const POST = async (request) => {
    try {
        const { items, userId, transactionId } = await request.json();

        // Here you would typically process the order, e.g., save it to the database
        const order = await OrderedItems.create({ items, userId, transactionId });

        console.log('Order saved:', order);

        return new Response(
            JSON.stringify({ message: 'Checkout successful', order }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Error during checkout', error: error.message }),
            { status: 500 }
        );
    }
}
