import React from "react";

type ProfileSectionProps = {
  avatarUrl: string;
  handleAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isEdited: boolean;
  nickname: string;
  handleEdit: () => void;
  setNickname: (newNickname: string) => void;
  birth: string;
  email: string;
  updateProfile: () => Promise<void>;
};
const ProfileSection: React.FC<ProfileSectionProps> = ({
  avatarUrl,
  handleAvatarChange,
  isEdited,
  nickname,
  setNickname,
  birth,
  email,
  updateProfile,
  handleEdit,
}) => {
  return (
    <div className="w-[400px] h-3/5 md:w-1/3 md:h-5/6 bg-black bg-opacity-50 shadow-xl p-3 m-4 rounded-lg">
      <div className="px-10 pt-10">
        <label
          htmlFor="fileInput"
          className={`flex justify-center items-center ${
            isEdited ? "cursor-pointer" : ""
          }`}
        >
          <img
            src={avatarUrl}
            alt="Profile"
            className="rounded-full w-36 h-36"
          />

          {isEdited && (
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden border-b-2 border-info"
            />
          )}
        </label>
      </div>
      <div className="mt-6 items-center text-center p-3">
        <h2 className="font-bold text-lg">{email}</h2>
        {isEdited ? (
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="mt-4 border-b-2 border-info bg-black bg-opacity-50 font-medium text-lg"
          />
        ) : (
          <h2 className="mt-4 font-medium text-lg word-wrap break-words">
            {nickname}
          </h2>
        )}
        <h2 className="mt-4 mb-4 md:mt-8 font-bold text-lg">{birth}</h2>
        <div className="mt-34 md:mt-48 flex justify-center gap-4">
          {isEdited ? (
            <>
              <button
                className="btn btn-primary"
                onClick={() => updateProfile()}
              >
                저장
              </button>
              <button className="btn btn-primary" onClick={() => handleEdit()}>
                취소
              </button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={() => handleEdit()}>
              수정
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
