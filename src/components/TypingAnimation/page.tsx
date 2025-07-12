"use client";

import { useEffect, useState } from "react";

const TypingAnimation = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeText, 150); // 타이핑 속도
      } else {
        // 타이핑 완료 후 잠시 대기
        setTimeout(() => {
          setIsTyping(false);
          // 지우기 시작
          const eraseText = () => {
            if (currentIndex > 0) {
              currentIndex--;
              setDisplayText(text.slice(0, currentIndex));
              timeoutId = setTimeout(eraseText, 100); // 지우기 속도
            } else {
              // 지우기 완료 후 다시 타이핑 시작
              setTimeout(() => {
                setIsTyping(true);
                currentIndex = 0;
                typeText();
              }, 1000); // 재시작 전 대기 시간
            }
          };
          eraseText();
        }, 2000); // 타이핑 완료 후 대기 시간
      }
    };

    typeText();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <span className="flex text-white lg:text-[9rem] text-[4rem] leading-[1.2] tracking-tighter">
      {displayText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypingAnimation;
