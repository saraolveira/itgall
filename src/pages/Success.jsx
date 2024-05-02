const Success = () => {
    document.title = "Form success! - ITGALL"
    return (
        <div className="flex justify-center items-center bg-lila-900 p-8 lg:p-20 w-screen min-h-[calc(100svh-13rem)]">
            <p className="font-bold text-4xl text-amarillo text-center">
                Your form was sent with success. We'll be in contact soon!
            </p>
        </div>
    )
}

export default Success
