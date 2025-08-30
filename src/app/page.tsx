'use client';

import { useState, useEffect } from 'react';

export default function CustomFontTester() {
    const [textContent, setTextContent] = useState(
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz'
    );
    const [fontSize, setFontSize] = useState(150);
    const [lineHeight, setLineHeight] = useState(1.5);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    const sampleTexts = [
        '한글 테스트: 가나다라마바사아자차카타파하',
        '영문 테스트: The quick brown fox jumps over the lazy dog',
        '숫자 테스트: 0123456789',
        '특수문자: !@#$%^&*()_+-=[]{}|;:,.<>?',
        '혼합 텍스트: Hello 안녕하세요 123',
        '긴 문장 테스트: 이것은 커스텀 폰트의 가독성을 테스트하기 위한 긴 문장입니다. 다양한 글자들이 어떻게 표시되는지 확인할 수 있습니다.',
    ];

    const fontSizes = [12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 64, 72];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouseX(e.clientX);
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        setWindowWidth(window.innerWidth);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 마우스 위치에 따른 gap 계산 (0~200px 범위)
    const calculateGap = (index: number) => {
        const normalizedX = mouseX / windowWidth; // 0~1 범위로 정규화
        const baseGap = 20;
        const maxGap = 200;
        const gapMultiplier = 1 + normalizedX * 9; // 1~10 배수
        return Math.min(baseGap * gapMultiplier, maxGap);
    };

    const increaseFontSize = () => {
        if (fontSize < 152) {
            setFontSize(fontSize + 2);
        }
    };

    const decreaseFontSize = () => {
        if (fontSize > 12) {
            setFontSize(fontSize - 2);
        }
    };

    return (
        <div className="min-h-screen bg-white p-[20px]">
            <div className="">
                {/* 헤더 */}
                <div className="mb-4 flex flex-row gap-[20px] justify-between">
                    <div className="flex flex-row">
                        <span
                            className="text-black text-[30px] pr-[20px] font-semibold"
                            style={{ marginRight: `${calculateGap(0)}px` }}
                        >
                            띄
                        </span>
                        <span
                            className="text-black text-[30px] pr-[60px] font-semibold"
                            style={{ marginRight: `${calculateGap(1)}px` }}
                        >
                            어
                        </span>
                        <span
                            className="text-black text-[30px] pr-[80px] font-semibold"
                            style={{ marginRight: `${calculateGap(2)}px` }}
                        >
                            쓰
                        </span>
                        <span className="text-black text-[30px] font-semibold">
                            고
                        </span>
                    </div>
                    <p className="text-black text-[30px] mr-[20px] font-semibold">
                        붙여쓰기
                    </p>
                </div>

                {/* 폰트 미리보기 */}
                <div className="border border-black p-6 h-[60dvh]">
                    <textarea
                        value={textContent}
                        onChange={(e) => setTextContent(e.target.value)}
                        style={{
                            fontSize: `${fontSize}px`,
                            lineHeight: lineHeight,
                            letterSpacing: `${letterSpacing}px`,
                            fontFamily: 'Mess-Light, sans-serif',
                        }}
                        className="w-full h-full p-4 bg-white resize-none text-black"
                        placeholder="여기에 텍스트를 입력하세요..."
                    />
                </div>

                {/* 테스트 설정 */}
                <div className="fixed bottom-[20px] left-[20px] right-[20px] flex flex-row gap-[20px] justify-between">
                    <div className="flex flex-row gap-[40px] w-[25%]">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <img
                                    src="/text.svg"
                                    alt=""
                                    className="w-[50px]"
                                />
                            </label>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={decreaseFontSize}
                                    disabled={fontSize <= 12}
                                    className="w-8 h-8 bg-black hover:invert disabled:bg-gray-100 disabled:text-gray-400 flex items-center justify-center p-[4px]"
                                >
                                    <img
                                        src="/minus.svg"
                                        alt=""
                                        className="invert"
                                    />
                                </button>
                                <button
                                    onClick={increaseFontSize}
                                    disabled={fontSize >= 152}
                                    className="w-8 h-8 bg-black hover:invert disabled:bg-gray-100 disabled:text-gray-400 flex items-center justify-center p-[4px]"
                                >
                                    <img
                                        src="/plus.svg"
                                        alt=""
                                        className="invert"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end w-full">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                step="0.5"
                                value={letterSpacing}
                                onChange={(e) =>
                                    setLetterSpacing(Number(e.target.value))
                                }
                                className="w-full h-8 bg-gray-300 leading-[120%] appearance-none cursor-pointer [&::-webkit-slider-track]:bg-gray-300 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-thumb]:h-0 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-track]:bg-gray-300 [&::-moz-range-thumb]:w-0 [&::-moz-range-thumb]:h-0 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
                                style={{
                                    background: `linear-gradient(to right, #000000 0%, #000000 ${
                                        (letterSpacing / 100) * 100
                                    }%, #d1d5db ${
                                        (letterSpacing / 100) * 100
                                    }%, #d1d5db 100%)`,
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row w-[25%] justify-end items-end group hover:cursor-pointer">
                        <p className="text-black text-[30px] font-semibold">
                            오이고수
                        </p>
                        <p className="text-black text-[30px] font-semibold group-hover:rotate-45">
                            ?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
