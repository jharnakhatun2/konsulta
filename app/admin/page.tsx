import Button from "@/components/ui/button";
import Image from "next/image";

export default function Admin() {
  // const features = [
  //   {
  //     icon:
  //   }
  // ]

  return (
    <section className="px-0 lg:px-20 py-10">
      <div className="container">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image
              className=""
              src="/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png"
              width={122}
              height={122}
              alt=""
            />
            <div className="font-inter">
              <h3 className="text-black font-medium">Sara Ekblom</h3>
              <p className="text-[#636363]">Läkarleasing AB</p>
            </div>
          </div>
          <Button outline>Redigera profil</Button>
        </div>

        <div className="mx-auto grid md:justify-center lg:justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3 py-10">
          <div className="bg-accent text-center rounded-2xl flex flex-col items-center justify-center max-w-[340px] py-10 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              className="mx-auto"
            >
              <path
                d="M25.0003 45.8334C36.5063 45.8334 45.8337 36.506 45.8337 25.0001C45.8337 13.4941 36.5063 4.16675 25.0003 4.16675C13.4944 4.16675 4.16699 13.4941 4.16699 25.0001C4.16699 36.506 13.4944 45.8334 25.0003 45.8334Z"
                stroke="#207579"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25 16.6667V33.3334"
                stroke="#207579"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.667 25H33.3337"
                stroke="#207579"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="text-primary text-[1.9rem] font-medium">
              Skapa annons
            </h3>
          </div>

          <div className="bg-accent text-center rounded-2xl flex flex-col items-center justify-center max-w-[340px] py-10 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              className="mx-auto"
            >
              <path
                d="M43.75 23.9584C43.7572 26.7081 43.1147 29.4207 41.875 31.8751C40.4051 34.8162 38.1453 37.29 35.3489 39.0194C32.5524 40.7488 29.3297 41.6655 26.0417 41.6667C23.2919 41.6739 20.5794 41.0315 18.125 39.7917L6.25 43.7501L10.2083 31.8751C8.96861 29.4207 8.32616 26.7081 8.33333 23.9584C8.33461 20.6704 9.25127 17.4477 10.9807 14.6512C12.7101 11.8547 15.1839 9.59499 18.125 8.12506C20.5794 6.88533 23.2919 6.24289 26.0417 6.25006H27.0833C31.4257 6.48963 35.5272 8.32248 38.6024 11.3977C41.6776 14.4729 43.5104 18.5743 43.75 22.9167V23.9584Z"
                stroke="#207579"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="text-primary text-[1.9rem] font-medium">Chatten</h3>
          </div>
          <div className="bg-accent text-center rounded-2xl flex flex-col items-center justify-center max-w-[340px] py-10 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              className="mx-auto"
            >
              <g clip-path="url(#clip0_71_44)">
                <path
                  d="M25 31.25C28.4518 31.25 31.25 28.4518 31.25 25C31.25 21.5482 28.4518 18.75 25 18.75C21.5482 18.75 18.75 21.5482 18.75 25C18.75 28.4518 21.5482 31.25 25 31.25Z"
                  stroke="#207579"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M40.4163 31.2499C40.139 31.8783 40.0563 32.5753 40.1788 33.2511C40.3014 33.927 40.6236 34.5506 41.1038 35.0416L41.2288 35.1666C41.6162 35.5536 41.9236 36.0131 42.1333 36.5189C42.3429 37.0247 42.4509 37.5669 42.4509 38.1145C42.4509 38.6621 42.3429 39.2043 42.1333 39.7101C41.9236 40.2159 41.6162 40.6754 41.2288 41.0624C40.8419 41.4498 40.3823 41.7571 39.8765 41.9668C39.3707 42.1765 38.8285 42.2844 38.2809 42.2844C37.7334 42.2844 37.1912 42.1765 36.6853 41.9668C36.1795 41.7571 35.72 41.4498 35.333 41.0624L35.208 40.9374C34.717 40.4571 34.0934 40.1349 33.4176 40.0124C32.7417 39.8899 32.0447 39.9726 31.4163 40.2499C30.8002 40.514 30.2746 40.9525 29.9045 41.5114C29.5343 42.0704 29.3357 42.7254 29.333 43.3958V43.7499C29.333 44.855 28.894 45.9148 28.1126 46.6962C27.3312 47.4776 26.2714 47.9166 25.1663 47.9166C24.0613 47.9166 23.0015 47.4776 22.2201 46.6962C21.4387 45.9148 20.9997 44.855 20.9997 43.7499V43.5624C20.9835 42.8728 20.7603 42.2041 20.3591 41.643C19.9578 41.082 19.397 40.6547 18.7497 40.4166C18.1213 40.1393 17.4243 40.0565 16.7484 40.1791C16.0726 40.3016 15.449 40.6238 14.958 41.1041L14.833 41.2291C14.446 41.6165 13.9865 41.9238 13.4807 42.1335C12.9748 42.3432 12.4327 42.4511 11.8851 42.4511C11.3375 42.4511 10.7953 42.3432 10.2895 42.1335C9.78368 41.9238 9.32415 41.6165 8.93717 41.2291C8.54977 40.8421 8.24244 40.3826 8.03276 39.8768C7.82307 39.3709 7.71515 38.8287 7.71515 38.2812C7.71515 37.7336 7.82307 37.1914 8.03276 36.6856C8.24244 36.1798 8.54977 35.7202 8.93717 35.3332L9.06217 35.2082C9.54246 34.7173 9.86464 34.0936 9.98718 33.4178C10.1097 32.742 10.027 32.045 9.74967 31.4166C9.48558 30.8004 9.04708 30.2749 8.48814 29.9047C7.92921 29.5346 7.27423 29.3359 6.60384 29.3333H6.24967C5.14461 29.3333 4.0848 28.8943 3.3034 28.1129C2.52199 27.3315 2.08301 26.2717 2.08301 25.1666C2.08301 24.0615 2.52199 23.0017 3.3034 22.2203C4.0848 21.4389 5.14461 20.9999 6.24967 20.9999H6.43717C7.12675 20.9838 7.79552 20.7606 8.35655 20.3593C8.91758 19.958 9.34492 19.3973 9.58301 18.7499C9.86033 18.1216 9.94306 17.4245 9.82052 16.7487C9.69798 16.0729 9.37579 15.4492 8.89551 14.9583L8.77051 14.8333C8.38311 14.4463 8.07578 13.9867 7.86609 13.4809C7.65641 12.9751 7.54848 12.4329 7.54848 11.8853C7.54848 11.3378 7.65641 10.7956 7.86609 10.2898C8.07578 9.78392 8.38311 9.32439 8.77051 8.93742C9.15748 8.55002 9.61701 8.24269 10.1228 8.033C10.6287 7.82332 11.1709 7.71539 11.7184 7.71539C12.266 7.71539 12.8082 7.82332 13.314 8.033C13.8198 8.24269 14.2794 8.55002 14.6663 8.93742L14.7913 9.06242C15.2823 9.5427 15.906 9.86489 16.5818 9.98743C17.2576 10.11 17.9546 10.0272 18.583 9.74992H18.7497C19.3659 9.48583 19.8914 9.04733 20.2615 8.48839C20.6317 7.92945 20.8303 7.27447 20.833 6.60409V6.24992C20.833 5.14485 21.272 4.08504 22.0534 3.30364C22.8348 2.52224 23.8946 2.08325 24.9997 2.08325C26.1047 2.08325 27.1645 2.52224 27.946 3.30364C28.7274 4.08504 29.1663 5.14485 29.1663 6.24992V6.43742C29.169 7.10781 29.3677 7.76278 29.7378 8.32172C30.108 8.88066 30.6335 9.31916 31.2497 9.58325C31.878 9.86057 32.5751 9.9433 33.2509 9.82076C33.9267 9.69822 34.5503 9.37604 35.0413 8.89575L35.1663 8.77075C35.5533 8.38335 36.0128 8.07602 36.5187 7.86634C37.0245 7.65665 37.5667 7.54872 38.1143 7.54872C38.6618 7.54872 39.204 7.65665 39.7098 7.86634C40.2157 8.07602 40.6752 8.38335 41.0622 8.77075C41.4496 9.15772 41.7569 9.61726 41.9666 10.1231C42.1763 10.6289 42.2842 11.1711 42.2842 11.7187C42.2842 12.2662 42.1763 12.8084 41.9666 13.3143C41.7569 13.8201 41.4496 14.2796 41.0622 14.6666L40.9372 14.7916C40.4569 15.2826 40.1347 15.9062 40.0122 16.582C39.8896 17.2578 39.9723 17.9549 40.2497 18.5833V18.7499C40.5138 19.3661 40.9523 19.8916 41.5112 20.2618C42.0701 20.6319 42.7251 20.8306 43.3955 20.8333H43.7497C44.8547 20.8333 45.9145 21.2722 46.696 22.0536C47.4774 22.835 47.9163 23.8948 47.9163 24.9999C47.9163 26.105 47.4774 27.1648 46.696 27.9462C45.9145 28.7276 44.8547 29.1666 43.7497 29.1666H43.5622C42.8918 29.1693 42.2368 29.3679 41.6779 29.7381C41.1189 30.1082 40.6804 30.6337 40.4163 31.2499Z"
                  stroke="#207579"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_71_44">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className="text-primary text-[1.9rem] font-medium">
              Konto inställningar
            </h3>
          </div>
          <div className="bg-accent text-center rounded-2xl flex flex-col items-center justify-center max-w-[340px] py-10 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              className="mx-auto"
            >
              <path
                d="M22.917 8.33337H8.33366C7.22859 8.33337 6.16878 8.77236 5.38738 9.55376C4.60598 10.3352 4.16699 11.395 4.16699 12.5V41.6667C4.16699 42.7718 4.60598 43.8316 5.38738 44.613C6.16878 45.3944 7.22859 45.8334 8.33366 45.8334H37.5003C38.6054 45.8334 39.6652 45.3944 40.4466 44.613C41.228 43.8316 41.667 42.7718 41.667 41.6667V27.0834"
                stroke="#207579"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M38.542 5.20836C39.3708 4.37956 40.4949 3.91394 41.667 3.91394C42.8391 3.91394 43.9632 4.37956 44.792 5.20836C45.6208 6.03716 46.0864 7.16126 46.0864 8.33336C46.0864 9.50546 45.6208 10.6296 44.792 11.4584L25.0003 31.25L16.667 33.3334L18.7503 25L38.542 5.20836Z"
                stroke="#207579"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="text-primary text-[1.9rem] font-medium">
              Mina annonser
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}