import Link from "next/link";
import Image from "next/image";

const CourseCard = ({id,name,title,grade,price,image}) => {
    return(
        <div className="block rounded-lg border m-4 p-2 shadow-sm w-1/6 sm:w-1/6 shadow-indigo-400 hover:shadow-2xl">
            <Link href="#">
                <Image
                    src= {image}
                    alt="education"
                    width={200}
                    height={200}
                    className="h-56 w-full rounded-md object-cover"/>

                <div className="mt-2 mx-2">

                    <div className="flex flex-row gap-3">
                            <Image
                                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="user"
                                width={30}
                                height={30}
                                className="rounded-full border-neutral-500"/>
                            <p className="text-sm my-1 text-gray-500">{name}</p>
                    </div>

                    <div>
                        <h2 className="text-lg mt-3 font-semibold">{title}</h2>
                    </div>

                    <div className="flex justify-between mt-2">
                        <p className="text-sm text-gray-500 font-semibold">Grade {grade}</p>
                        <p className="text-sm text-gray-500 ">Rs.{price}</p>
                    </div>
                </div>

            </Link>
        </div>
);
};

export default CourseCard;