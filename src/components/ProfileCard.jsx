export default function ProfileCard({ backers, created }) {
  return (
    <div className="flex w-72 flex-col items-center bg-white rounded-lg drop-shadow-md py-5 gap-5 ">
            {/* {avatarImage ? (
                    <img src={avatarImage} className={`w-full rounded-full`} alt="Avatar" />
                  ) : ( */}
                    <div className="w-10 h-10 font-semibold text-lg text-white rounded-full bg-gray-500 flex justify-center items-center">
                      {'creatorName'[0].toUpperCase()}
                    </div>
                  {/* )} */}
                <div>
                  <h1 className="font-semibold">Creator Name</h1>
                  <h2 className="text-sm text-gray-500">Joined {'Jun 2012'}</h2>
                </div>
                <p className="px-10 text-sm">
                  {'Laguna Studios is a woman-owned independent comic book company with a team spread out all over theaguna Studios is a woman-owned independent comic book company with a team spread out all over the'}
                </p>
                <div className="grid grid-cols-2 gap-10">
                    <span className="flex flex-col">
                      <p className="text-xs text-gray-500">Backers</p>
                      <p className="font-medium">{backers}</p>
                    </span>
                    <span className="flex flex-col">
                      <p className="text-xs text-gray-500">Project created</p>
                      <p className="font-medium">{created}</p>
                    </span>
                </div>
            </div>
  )
}
