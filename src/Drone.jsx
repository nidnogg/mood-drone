import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const Drone = ({ isActive, ...props }) => {
  const drone = useRef(null);
  const wheel0 = useRef(null);
  const wheel1 = useRef(null);
  const rotation = useRef(null);

  useEffect(() => {
    //placeholder for eventual parallax effect with drone ref
  });

  useEffect(() => {
    // Only create animation when wheel refs are available
    if (!wheel0.current || !wheel1.current) return;
    
    if (!rotation.current) {
      rotation.current = gsap.to([wheel0.current, wheel1.current], {
          duration: 0.7,
          transformOrigin:"50% 50%",
          rotation: "360",
          ease: "linear",
          repeat: -1,
          paused: true
        }).timeScale(0);
    } else if (isActive()) {
        gsap.to(rotation.current, {
          duration: 1.0,
          timeScale: 1,
          overwrite: true,
          onStart() {
            rotation.current.play();
          }
        });
      } else {
        gsap.to(rotation.current, {
          duration: 0.8,
          timeScale: 0,
          overwrite: true,
          onComplete: () => {
            rotation.current.pause();
          }
        });
      }
  }, [isActive]);

  return (
    <svg ref={drone} data-name="Layer 1" viewBox="0 0 550.12 652.07" {...props}>
      {/*<title>{"mood-drone-illustrator-01"}</title>*/}
      <path
        data-name="Dark Pastel"
        fill="#b98656"
        d="M7.01 35.01h534.98v617.05H7.01z"
      />
      <path fill="#e6dad1" d="M39.05 27.05h462.91v624.74H39.05z" />
      <path
        fill="none"
        stroke="#c6b2a2"
        strokeWidth={1.7}
        d="M39.9 27.9h461.21v623.04H39.9z"
      />
      <path
        data-name="Dark rectangle box"
        fill="#2f232a"
        d="M60.11 54.11h419.77v597.68H60.11z"
      />
      <path
        data-name="Path 48"
        d="M165 505.05h210.7v146.53H165z"
        fill="#675858"
      />
      <path
        data-name="Rectangle 24"
        fill="#e6dad1"
        d="M164.99 504.05h210.7v13h-210.7z"
      />
      <path
        data-name="Rectangle 25"
        fill="#2f232a"
        d="M165.13 470.05h210.56v34H165.13z"
      />
      <path
        data-name="Path 45"
        d="M268.61 465.05h74l-3.5 29.14-4.62 4.59-6.94 3-51.34.64-1.35-1.33-2.22-1.67z"
        fill="#cd9b48"
      />
      <g data-name="Path 53">
        <path
          d="M272.66 499.46a11.48 11.48 0 001.86-.15 14.22 14.22 0 001.94-.52l-.47.78-1.71.77z"
          fill="#fff"
        />
        <path
          d="M274.28 500.34l-1.62-.88a10.63 10.63 0 001.86-.15c.33-.06.67-.14 1-.22.56-.15 1-.29 1-.29l-.47.77z"
          fill="#ac884d"
        />
      </g>
      <g
        data-name="MOOD DRONE"
        opacity={0.9}
        style={{
          isolation: "isolate"
        }}
        fontSize={14}
        fill="#fff9f5"
        fontFamily="ArchitectsDaughter-Regular, Architects Daughter"
      >
        <text
          transform="translate(283.33 485.05)"
          style={{
            isolation: "isolate"
          }}
        >
          {"MOOD"}
        </text>
        <text
          transform="translate(280.29 499.05)"
          style={{
            isolation: "isolate"
          }}
        >
          {"DRONE"}
        </text>
      </g>
      <path
        data-name="Path 47"
        d="M330 490.66a9.14 9.14 0 003.67 2.93c1.95.62 5.51-.07 5.51-.07v.55l-.86 1.14-9.16-1.44z"
        fill="#ac884d"
      />
      <path
        data-name="Path 46"
        d="M327.51 501.85s1.72-13.1 2.52-10.93 1.28 2.63 3.84 3.3a11.45 11.45 0 005.24-.08 13.92 13.92 0 01-11.6 7.71"
        fill="#f9e2bb"
      />
      <path
        data-name="Path 52"
        d="M276.09 502.45c0-.24.47-3.86.47-3.86a4.55 4.55 0 01-1.91 1.05 4.46 4.46 0 01-2-.19z"
        fill="#f9e2bb"
      />
      <g
        data-name="MK I sleeping toolkit"
        style={{
          isolation: "isolate"
        }}
      >
        <text
          transform="translate(285.61 513.05)"
          fontSize={8}
          fill="#1c1519"
          fontFamily="IBMPlexSans, IBM Plex Sans"
          style={{
            isolation: "isolate"
          }}
        >
          {"MK I sleeping "}
          <tspan x={50.7} y={0} letterSpacing="0em">
            {"t"}
          </tspan>
          <tspan x={53.47} y={0}>
            {"oolkit"}
          </tspan>
        </text>
      </g>
      <g data-name="Secondary Control Panel">
        <path
          data-name="Rectangle 3"
          fill="#241a20"
          d="M220.41 289.05h107.2v48h-107.2z"
        />
        <g data-name="Rectangle 4">
          <path fill="#241a20" d="M219.4 274.05h103.19v48H219.4z" />
          <path
            fill="none"
            stroke="#362d2e"
            strokeWidth={2.4}
            d="M220.6 275.25h100.79v45.6H220.6z"
          />
        </g>
        <g data-name="Rectangle 2-2" fill="none">
          <path d="M217.4 272.05h107.2v50H217.4z" />
          <path
            stroke="#493c3e"
            strokeWidth={2.4}
            d="M218.6 273.25h104.8v47.6H218.6z"
          />
        </g>
        <g data-name="Ellipse 10-3">
          <ellipse
            cx={123.73}
            cy={515.55}
            rx={16.53}
            ry={16.5}
            fill="#20161d"
          />
          <ellipse
            cx={123.73}
            cy={515.55}
            rx={15.63}
            ry={15.6}
            fill="none"
            stroke="#726464"
            strokeWidth={1.8}
          />
        </g>
        <g data-name="Ellipse 9-3">
          <ellipse
            cx={122.73}
            cy={514.55}
            rx={16.53}
            ry={16.5}
            fill="#20161d"
          />
          <ellipse
            cx={122.73}
            cy={514.55}
            rx={15.63}
            ry={15.6}
            fill="none"
            stroke="#9b8c8c"
            strokeWidth={1.8}
          />
        </g>
        <g data-name="Ellipse 10-4" transform="rotate(-6.02 124.152 465.93)">
          <ellipse
            cx={124.03}
            cy={465.63}
            rx={16.37}
            ry={16.34}
            fill="#20161d"
          />
          <ellipse
            cx={124.03}
            cy={465.63}
            rx={15.48}
            ry={15.45}
            fill="none"
            stroke="#726464"
            strokeWidth={1.8}
          />
        </g>
        <g data-name="Ellipse 9-4" transform="rotate(-6.02 125.068 464.834)">
          <ellipse
            cx={124.92}
            cy={464.53}
            rx={16.37}
            ry={16.34}
            fill="#20161d"
          />
          <ellipse
            cx={124.92}
            cy={464.53}
            rx={15.48}
            ry={15.45}
            fill="none"
            stroke="#9b8c8c"
            strokeWidth={1.8}
          />
        </g>
        <g data-name="Ellipse 11-2">
          <ellipse
            cx={428.29}
            cy={338.55}
            rx={20.54}
            ry={20.5}
            fill="#271d23"
          />
          <ellipse
            cx={428.29}
            cy={338.55}
            rx={19.64}
            ry={19.6}
            fill="none"
            stroke="#9b8c8c"
            strokeWidth={1.8}
          />
        </g>
        <ellipse
          data-name="Ellipse 17-2"
          cx={165.85}
          cy={374.25}
          rx={15.45}
          ry={15.42}
          transform="rotate(-5.77 165.759 374.095)"
          fill="#20161d"
        />
        <g data-name="Group 1">
          <g data-name="Rectangle 5">
            <path fill="#241a20" d="M476.95 385.05h8.07v95h-8.07z" />
            <path
              fill="none"
              stroke="#493c3e"
              strokeWidth={2.4}
              d="M478.15 386.25h5.67v92.6h-5.67z"
            />
          </g>
          <path
            data-name="Rectangle 6"
            fill="#241a20"
            d="M476.95 387.05h8.07v93h-8.07z"
          />
        </g>
        <g data-name="Group 2" fill="none" stroke="#2f232a" strokeWidth={0.6}>
          <path data-name="Line 1" d="M121.72 403.74l1.82 1.81" />
          <path data-name="Line 2" d="M123.54 403.74l-1.82 1.81" />
        </g>
        <g data-name="Group 3" fill="none" stroke="#2f232a" strokeWidth={0.6}>
          <path data-name="Line 1-2" d="M419.27 405.74l1.82 1.81" />
          <path data-name="Line 2-2" d="M421.09 405.74l-1.82 1.81" />
        </g>
        <g data-name="Group 11">
          <g data-name="Ellipse 19-4">
            <ellipse cx={419.65} cy={403.05} rx={5.01} ry={5} fill="#675858" />
            <ellipse
              cx={419.65}
              cy={403.05}
              rx={4.51}
              ry={4.5}
              fill="none"
              stroke="#5d5555"
            />
          </g>
          <path
            data-name="Line 3"
            fill="none"
            stroke="#1c1519"
            d="M418 405.09l3.54-3.53"
          />
          <path
            data-name="Line 4"
            fill="none"
            stroke="#1c1519"
            d="M418 401.55l3.54 3.54"
          />
        </g>
        <g data-name="Group 12">
          <g data-name="Ellipse 19-5">
            <ellipse cx={186.65} cy={487.05} rx={5.01} ry={5} fill="#675858" />
            <ellipse
              cx={186.65}
              cy={487.05}
              rx={4.51}
              ry={4.5}
              fill="none"
              stroke="#5d5555"
            />
          </g>
          <path
            data-name="Line 3-2"
            fill="none"
            stroke="#1c1519"
            d="M185 489.09l3.54-3.53"
          />
          <path
            data-name="Line 4-2"
            fill="none"
            stroke="#1c1519"
            d="M185 485.55l3.54 3.54"
          />
        </g>
        <g data-name="Path 49-2">
          <path
            d="M420.23 442.52a21.15 21.15 0 0116.15 1.27 21.06 21.06 0 019.24 28.4 20.94 20.94 0 01-5 6.38 21.24 21.24 0 01-7.31 4.12A21.12 21.12 0 01407.92 453a21.05 21.05 0 0112.31-10.5z"
            fill="#20161d"
          />
          <path
            d="M420.51 443.38a20.07 20.07 0 00-7 3.94 20.24 20.24 0 00-6.91 13.56 20.27 20.27 0 004.87 15 20.09 20.09 0 006.12 4.77 20.22 20.22 0 0015.41 1.19 20.19 20.19 0 0013-25.47 20.26 20.26 0 00-25.53-13m-.56-1.71a22 22 0 1113.65 41.88A22 22 0 11420 441.67z"
            fill="#726464"
          />
        </g>
        <g data-name="Path 50-2">
          <path
            d="M421.92 443.38a21.13 21.13 0 0116.14 1.27 21.12 21.12 0 014.26 34.78 21.08 21.08 0 01-7.31 4.12 21.12 21.12 0 01-25.39-29.67 21.05 21.05 0 0112.31-10.5z"
            fill="#20161d"
          />
          <path
            d="M422.19 444.24a20.16 20.16 0 00-11.78 10.05 20.33 20.33 0 00-2.14 7.45 20.29 20.29 0 0018.46 21.88 20.3 20.3 0 008-.92 20.19 20.19 0 0013-25.47 20.24 20.24 0 00-25.54-13m-.55-1.71a22 22 0 1113.64 41.87 22 22 0 11-13.64-41.88z"
            fill="#9b8c8c"
          />
        </g>
        <g data-name="Group 5">
          <ellipse
            data-name="Ellipse 18-3"
            cx={165.85}
            cy={374.25}
            rx={15.45}
            ry={15.42}
            transform="rotate(-5.77 165.759 374.095)"
            fill="#20161d"
          />
          <g data-name="Group 4">
            <path
              data-name="Path 14"
              d="M160.39 375.72s-3.54-3.56-.15-7 7.24-.13 7.24-.13l28.33 28.29-7.08 7.12z"
              fill="#675858"
            />
            <path
              data-name="Path 15"
              d="M162.76 372.65h2.89l-2.37.88"
              fill="none"
              stroke="#31222b"
              opacity={0.68}
              style={{
                isolation: "isolate"
              }}
            />
            <path
              data-name="Path 16"
              d="M161.77 372.19l1.55-.44 2.49.44h0"
              fill="none"
              stroke="#2f232a"
              opacity={0.79}
              style={{
                isolation: "isolate"
              }}
            />
            <path
              data-name="Path 17"
              d="M168.73 381v-1.39l1.86.79.68 1.44.34 2h1l.51-2 .62-.87.9-1.36-4.83-.65-1-.14"
              fill="#2f232a"
              opacity={0.64}
              style={{
                isolation: "isolate"
              }}
            />
            <path
              data-name="Path 18"
              d="M180.6 395.55l4.68 2.26-1.49 1 3.55-3.26 1 2.26 3 1 1-1v-3.61l-1.76-2.75-3.75-3.38-6.21 3.87-.67.58-1.13 1.13"
              fill="#2f232a"
              opacity={0.64}
              style={{
                isolation: "isolate"
              }}
            />
          </g>
        </g>
        <g data-name="Group 6">
          <ellipse
            data-name="Ellipse 18-4"
            cx={383.25}
            cy={374.25}
            rx={15.45}
            ry={15.42}
            transform="rotate(-5.77 383.095 374.107)"
            fill="#20161d"
          />
          <g data-name="Group 4-2">
            <path
              data-name="Path 14-2"
              d="M377.53 369.65s3.56-3.55 7-.15.13 7.21.13 7.21L356.28 405l-7.09-7.07z"
              fill="#675858"
            />
            <path
              data-name="Path 15-2"
              d="M380.59 372v2.89l-.88-2.36"
              fill="none"
              stroke="#31222b"
              opacity={0.68}
              style={{
                isolation: "isolate"
              }}
            />
            <path
              data-name="Path 16-2"
              d="M381.06 371l.44 1.56-.44 2.48h0"
              fill="none"
              stroke="#2f232a"
              opacity={0.79}
              style={{
                isolation: "isolate"
              }}
            />
            <path
              data-name="Path 17-2"
              d="M372.24 378h1.39l-.79 1.86-1.45.67-2 .34v1l2 .5.87.62 1.37.9.65-4.81.14-1"
              fill="#2f232a"
              opacity={0.64}
              style={{
                isolation: "isolate"
              }}
            />
            <path
              data-name="Path 18-2"
              d="M357.6 389.75l-6.19 6.25-1.14 2.23 7.36-1.73-2.27 1-1 3 1 1H359l2.76-1.75 3.39-3.74-3.92-6.24-.59-.67-1.14-1.1"
              fill="#2f232a"
              opacity={0.64}
              style={{
                isolation: "isolate"
              }}
            />
          </g>
        </g>
        <path
          data-name="Rectangle 15"
          fill="#1c1519"
          d="M322.59 394.05h51.09v77h-51.09z"
        />
        <g data-name="Rectangle 16">
          <path fill="#23191f" d="M213.39 374.05h109.2v101h-109.2z" />
          <path
            fill="none"
            stroke="#675858"
            strokeWidth={1.7}
            d="M214.24 374.9h107.5v99.3h-107.5z"
          />
        </g>
        <path
          data-name="Rectangle 18"
          fill="#1c1519"
          d="M162.3 394.05h51.09v77H162.3z"
        />
        <path
          data-name="Rectangle 7"
          fill="#9b8c8c"
          d="M372.69 394.05h18.03v258h-18.03z"
        />
        <path
          data-name="Rectangle 8"
          fill="#7d7272"
          d="M462.85 244.05h18.03v408h-18.03z"
        />
        <path
          data-name="Rectangle 9"
          fill="#9b8c8c"
          d="M149.28 394.05h18.03v258h-18.03z"
        />
        <path
          data-name="Rectangle 10"
          fill="#7b7171"
          d="M60.11 272.05h18.03v380H60.11z"
        />
        <g>
          <g data-name="Ellipse 15-3">
            <ellipse
              cx={349.14}
              cy={434.55}
              rx={14.53}
              ry={14.5}
              fill="#22181e"
            />
            <ellipse
              cx={349.14}
              cy={434.55}
              rx={13.48}
              ry={13.45}
              fill="none"
              stroke="#2f232a"
              strokeWidth={2.1}
            />
          </g>
          <ellipse
            data-name="Ellipse 16"
            cx={349.64}
            cy={435.05}
            rx={3.01}
            ry={3}
            fill="#1c1519"
          />
        </g>
        <g>
          <g data-name="Ellipse 15-4">
            <ellipse
              cx={187.85}
              cy={434.55}
              rx={14.53}
              ry={14.5}
              fill="#22181e"
            />
            <ellipse
              cx={187.85}
              cy={434.55}
              rx={13.48}
              ry={13.45}
              fill="none"
              stroke="#2f232a"
              strokeWidth={2.1}
            />
          </g>
          <ellipse
            data-name="Ellipse 16-2"
            cx={188.35}
            cy={435.05}
            rx={3.01}
            ry={3}
            fill="#1c1519"
          />
        </g>
        <g data-name="Group 9" fill="#1c1519">
          <ellipse
            data-name="Ellipse 23"
            cx={222.41}
            cy={383.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 34"
            cx={222.41}
            cy={394.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 44"
            cx={222.41}
            cy={404.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 54"
            cx={222.41}
            cy={414.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 64"
            cx={222.41}
            cy={424.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 74"
            cx={222.41}
            cy={434.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 84"
            cx={222.41}
            cy={444.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 94"
            cx={222.41}
            cy={454.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 104"
            cx={222.41}
            cy={464.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 24"
            cx={232.43}
            cy={383.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 35"
            cx={232.43}
            cy={394.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 45"
            cx={232.43}
            cy={404.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 55"
            cx={232.43}
            cy={414.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 65"
            cx={232.43}
            cy={424.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 75"
            cx={232.43}
            cy={434.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 85"
            cx={232.43}
            cy={444.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 95"
            cx={232.43}
            cy={454.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 105"
            cx={232.43}
            cy={464.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 25"
            cx={242.45}
            cy={383.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 36"
            cx={242.45}
            cy={394.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 46"
            cx={242.45}
            cy={404.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 56"
            cx={242.45}
            cy={414.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 66"
            cx={242.45}
            cy={424.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 76"
            cx={242.45}
            cy={434.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 86"
            cx={242.45}
            cy={444.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 96"
            cx={242.45}
            cy={454.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 106"
            cx={242.45}
            cy={464.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 26"
            cx={252.47}
            cy={383.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 37"
            cx={252.47}
            cy={394.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 47"
            cx={252.47}
            cy={404.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 57"
            cx={252.47}
            cy={414.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 67"
            cx={252.47}
            cy={424.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 77"
            cx={252.47}
            cy={434.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 87"
            cx={252.47}
            cy={444.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 97"
            cx={252.47}
            cy={454.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 107"
            cx={252.47}
            cy={464.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 27"
            cx={262.48}
            cy={383.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 42"
            cx={262.48}
            cy={394.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 52"
            cx={262.48}
            cy={404.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 62"
            cx={262.48}
            cy={414.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 72"
            cx={262.48}
            cy={424.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 82"
            cx={262.48}
            cy={434.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 92"
            cx={262.48}
            cy={444.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 102"
            cx={262.48}
            cy={454.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 112"
            cx={262.48}
            cy={464.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 28"
            cx={272.5}
            cy={383.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 41"
            cx={272.5}
            cy={394.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 51"
            cx={272.5}
            cy={404.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 61"
            cx={272.5}
            cy={414.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 71"
            cx={272.5}
            cy={424.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 81"
            cx={272.5}
            cy={434.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 91"
            cx={272.5}
            cy={444.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 101"
            cx={272.5}
            cy={454.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 111"
            cx={272.5}
            cy={464.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 29"
            cx={282.52}
            cy={383.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 40"
            cx={282.52}
            cy={394.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 50"
            cx={282.52}
            cy={404.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 60"
            cx={282.52}
            cy={414.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 70"
            cx={282.52}
            cy={424.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 80"
            cx={282.52}
            cy={434.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 90"
            cx={282.52}
            cy={444.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 100"
            cx={282.52}
            cy={454.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 110"
            cx={282.52}
            cy={464.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 30"
            cx={292.54}
            cy={383.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 39"
            cx={292.54}
            cy={394.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 49"
            cx={292.54}
            cy={404.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 59"
            cx={292.54}
            cy={414.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 69"
            cx={292.54}
            cy={424.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 79"
            cx={292.54}
            cy={434.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 89"
            cx={292.54}
            cy={444.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 99"
            cx={292.54}
            cy={454.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 109"
            cx={292.54}
            cy={464.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 31"
            cx={302.56}
            cy={383.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 38"
            cx={302.56}
            cy={394.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 48"
            cx={302.56}
            cy={404.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 58"
            cx={302.56}
            cy={414.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 68"
            cx={302.56}
            cy={424.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 78"
            cx={302.56}
            cy={434.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 88"
            cx={302.56}
            cy={444.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 98"
            cx={302.56}
            cy={454.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 108"
            cx={302.56}
            cy={464.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 32"
            cx={312.58}
            cy={383.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 33"
            cx={312.58}
            cy={394.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 43"
            cx={312.58}
            cy={404.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 53"
            cx={312.58}
            cy={414.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 63"
            cx={312.58}
            cy={424.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 73"
            cx={312.58}
            cy={434.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 83"
            cx={312.58}
            cy={444.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 93"
            cx={312.58}
            cy={454.05}
            rx={3.01}
            ry={3}
          />
          <ellipse
            data-name="Ellipse 103"
            cx={312.58}
            cy={464.05}
            rx={3.01}
            ry={3}
          />
        </g>
        <g data-name="Group 10">
          <g data-name="Ellipse 19-6">
            <ellipse cx={124.65} cy={403.05} rx={5.01} ry={5} fill="#675858" />
            <ellipse
              cx={124.65}
              cy={403.05}
              rx={4.51}
              ry={4.5}
              fill="none"
              stroke="#5d5555"
            />
          </g>
          <path
            data-name="Line 3-3"
            fill="none"
            stroke="#1c1519"
            d="M123 405.09l3.54-3.53"
          />
          <path
            data-name="Line 4-3"
            fill="none"
            stroke="#1c1519"
            d="M123 401.55l3.54 3.54"
          />
        </g>
      </g>
      <g data-name="wheel guide">
        <path
          data-name="wheel bg"
          fill="#1c1519"
          d="M218.4 152.05h112.21v152H218.4z"
        />
        <g data-name="wheel rect">
          <path fill="#2f232a" d="M268.49 281.05h12.02v12h-12.02z" />
          <path
            fill="none"
            stroke="#675858"
            d="M268.99 281.55h11.02v11h-11.02z"
          />
        </g>
        <ellipse
          data-name="Ellipse 21"
          cx={135.75}
          cy={228.05}
          rx={132.74}
          ry={133}
          fill="#1c1519"
        />
        <ellipse
          data-name="Ellipse 22"
          cx={414.26}
          cy={228.05}
          rx={132.74}
          ry={133}
          fill="#1c1519"
        />
      </g>
      <g>
        <path
          data-name="Rectangle 28"
          fill="#f9eee5"
          d="M167.09 517.01h205.57v82.15H167.09z"
        />
        <path
          data-name="Path 42"
          d="M367.44 586.26v-64.93H174.06v64.93z"
          fill="#f2e8e1"
        />
        <path
          data-name="Path 43"
          d="M357.54 590.58v-69.25H183.06v69.25z"
          fill="#fff9f5"
        />
        <path
          data-name="Path 20"
          d="M356.72 525.81H184.6l-8.8-4.65h191.64z"
          fill="#9b8c8c"
        />
        <path
          data-name="Path 41"
          d="M189.3 589.21h165l8.44 1.37H179z"
          fill="#9b8c8c"
        />
      </g>
      <g>
        <g ref={wheel1} data-name="wheel 1">
          <circle
            data-name="Ellipse 3"
            cx={134}
            cy={228.05}
            r={134}
            fill="#675858"
          />
          <g data-name="Sub wheel">
            <g data-name="Ellipse 5-3">
              <circle cx={133.92} cy={227.63} r={49.33} fill="#675858" />
              <circle
                cx={133.92}
                cy={227.63}
                r={48.83}
                fill="none"
                stroke="#e6dad1"
              />
            </g>
            <g data-name="Ellipse 7-3">
              <circle cx={132.66} cy={227.62} r={48.07} fill="#675858" />
              <circle
                cx={132.66}
                cy={227.62}
                r={47.57}
                fill="none"
                stroke="#40393d"
              />
            </g>
            <path
              data-name="Path 1-3"
              d="M159.67 219.87l-23.09 36.44-3.17-2.44 23.87-35.8z"
              fill="#2f232a"
            />
            <path
              data-name="Path 2-3"
              d="M136.61 256.28l-50-36.12.51-2.12 51.25 35.78z"
              fill="#9b8c8c"
            />
            <path
              data-name="Path 6-3"
              d="M158.86 220.58l-49.62-33.44a1.3 1.3 0 01.85-.49c.45 0 .23-.11.23-.11l49.57 33.14z"
              fill="#2f232a"
            />
            <path
              data-name="Path 7-3"
              d="M156.33 220.58l-49.62-33.44a1.3 1.3 0 01.85-.49c.45 0 .23-.11.23-.11l49.57 33.14z"
              fill="#7e6969"
            />
            <path
              data-name="Path 8-3"
              d="M156.32 219.54l-22.79 31.07s.39.46.59.46.82.65.82.65l21.83-31.36z"
              fill="#7e6969"
            />
          </g>
          <path
            data-name="Path 10-3"
            d="M176.83 268l18.78 70.26a60.48 60.48 0 01-11.71 6.27 110.36 110.36 0 01-15.3 4.5l-38.87-63.43s-18.87.8-32.51-9-22-30.19-22-30.19L5.83 227.9l1-14.78 3.14-15L81 196.65s10.74-17 26.7-23.72 37.14-3.2 37.14-3.2l50-51.51 12.86 6.91 10.82 11.15L182 199.76s8.74 16.62 7.45 33.68S176.83 268 176.83 268z"
            fill="none"
            stroke="#605252"
          />
          <g data-name="Ellipse 8">
            <circle cx={63.09} cy={254.95} r={8.31} fill="#675858" />
            <circle
              cx={63.09}
              cy={254.95}
              r={7.81}
              fill="none"
              stroke="#605252"
            />
          </g>
          <path
            data-name="Path 11"
            d="M178 185a41.39 41.39 0 00-7.78-8.56 36.19 36.19 0 00-9.87-5.21L177 154.65a12.38 12.38 0 013.27.94 38.91 38.91 0 013.59 1.66 13.92 13.92 0 013.49 3.4 16.76 16.76 0 012.25 4.69z"
            fill="#2f232a"
          />
          <path
            data-name="Path 12"
            d="M66.61 207.65a41.54 41.54 0 00-3.53 11 36.6 36.6 0 00.43 11.15l-22.75-6.17a12.1 12.1 0 01-.82-3.3 37 37 0 01-.35-3.93 13.8 13.8 0 011.2-4.73 16.12 16.12 0 012.94-4.29z"
            fill="#2f232a"
          />
          <path
            data-name="Path 13"
            d="M147.29 287.85a41.08 41.08 0 0011.32-2.46 36.4 36.4 0 009.44-5.94l6 22.78a11.86 11.86 0 01-2.44 2.36 36.32 36.32 0 01-3.24 2.28 13.92 13.92 0 01-4.69 1.32 16.11 16.11 0 01-5.18-.4z"
            fill="#2f232a"
          />
        </g>
        <g ref={wheel0} data-name="wheel 0">
          <circle
            data-name="Ellipse 3-2"
            cx={416}
            cy={228.05}
            r={134}
            fill="#675858"
          />
          <g data-name="Sub wheel-2">
            <g data-name="Ellipse 5-4">
              <circle cx={415.92} cy={227.63} r={49.33} fill="#675858" />
              <circle
                cx={415.92}
                cy={227.63}
                r={48.83}
                fill="none"
                stroke="#e6dad1"
              />
            </g>
            <g data-name="Ellipse 7-4">
              <circle cx={414.66} cy={227.62} r={48.07} fill="#675858" />
              <circle
                cx={414.66}
                cy={227.62}
                r={47.57}
                fill="none"
                stroke="#40393d"
              />
            </g>
            <path
              data-name="Path 1-4"
              d="M441.67 219.87l-23.09 36.44-3.17-2.44 23.87-35.8z"
              fill="#2f232a"
            />
            <path
              data-name="Path 2-4"
              d="M418.61 256.28l-50-36.12.51-2.12 51.25 35.78z"
              fill="#9b8c8c"
            />
            <path
              data-name="Path 6-4"
              d="M440.86 220.58l-49.62-33.44a1.3 1.3 0 01.85-.49c.45 0 .23-.11.23-.11l49.57 33.14z"
              fill="#2f232a"
            />
            <path
              data-name="Path 7-4"
              d="M438.33 220.58l-49.62-33.44a1.3 1.3 0 01.85-.49c.45 0 .23-.11.23-.11l49.57 33.14z"
              fill="#7e6969"
            />
            <path
              data-name="Path 8-4"
              d="M438.32 219.54l-22.79 31.07s.39.46.59.46.82.65.82.65l21.83-31.36z"
              fill="#7e6969"
            />
          </g>
          <path
            data-name="Path 10-4"
            d="M458.83 268l18.78 70.26a60.48 60.48 0 01-11.71 6.27 110.36 110.36 0 01-15.3 4.5l-38.87-63.43s-18.87.8-32.51-9-22.05-30.19-22.05-30.19l-69.34-18.51 1-14.78 3.14-15 71-1.46s10.74-17 26.7-23.72 37.14-3.2 37.14-3.2l50.05-51.51 12.86 6.91 10.82 11.15L464 199.76s8.74 16.62 7.45 33.68S458.83 268 458.83 268z"
            fill="none"
            stroke="#605252"
          />
          <g data-name="Path 44">
            <path
              d="M345.09 262.77a7.82 7.82 0 117.81-7.77 7.83 7.83 0 01-7.81 7.77z"
              fill="#675858"
            />
            <path
              d="M345.09 262.27a7.32 7.32 0 10-7.32-7.32 7.33 7.33 0 007.32 7.32m0 1a8.32 8.32 0 118.31-8.27 8.33 8.33 0 01-8.31 8.27z"
              fill="#605252"
            />
          </g>
          <path
            data-name="Path 11-2"
            d="M460 185a41.39 41.39 0 00-7.78-8.56 36.19 36.19 0 00-9.87-5.21L459 154.65a12.38 12.38 0 013.27.94 38.91 38.91 0 013.59 1.66 13.92 13.92 0 013.49 3.4 16.76 16.76 0 012.25 4.69z"
            fill="#2f232a"
          />
          <path
            data-name="Path 12-2"
            d="M348.61 207.65a41.54 41.54 0 00-3.53 11 36.6 36.6 0 00.43 11.15l-22.75-6.17a12.1 12.1 0 01-.82-3.3 37 37 0 01-.35-3.93 13.8 13.8 0 011.2-4.73 16.12 16.12 0 012.94-4.29z"
            fill="#2f232a"
          />
          <path
            data-name="Path 13-2"
            d="M429.29 287.85a41.08 41.08 0 0011.32-2.46 36.4 36.4 0 009.44-5.94l6 22.78a11.86 11.86 0 01-2.44 2.36 36.32 36.32 0 01-3.24 2.28 13.92 13.92 0 01-4.69 1.32 16.11 16.11 0 01-5.18-.4z"
            fill="#2f232a"
          />
        </g>
      </g>
      <g>
        <path
          d="M467.82 130.59l-398.28-.4v-1.87l-.19-.15-.67-.53V76.57l400.62-.65v51.33l-1.27 1-.19.15v2.16z"
          fill="#e6dad1"
        />
        <path
          d="M467.32 130.09v-1.9l.37-.3 1.09-.88V76.42l-399.62.64v50.34l.48.37.38.3v1.62l397.28.4m1 1l-399.3-.4v-2.13l-.86-.68V76.07l401.62-.65v52.07l-1.46 1.18z"
          fill="#ffeddf"
        />
        <g data-name="lower ridge-2">
          <path
            d="M475.64 116.8l-411.34-.07v-.32l-.43-.06-.45-.06v-8.77l413.74.33v8.37l-1.07.15-.43.06z"
            fill="#e6dad1"
          />
          <path
            d="M475.14 116.3v-.3l.86-.12.65-.09v-7.44L63.92 108v7.83l.86.12v.25l410.34.07m1 1l-412.32-.04v-.38l-.88-.12V107l414.75.33v9.31l-1.5.21z"
            fill="#ffeddf"
          />
        </g>
        <path
          data-name="shadow rect-2"
          fill="#e6dad1"
          opacity={0.56}
          style={{
            isolation: "isolate"
          }}
          d="M67.8 58.13h403.95v17.29H67.8z"
        />
        <g data-name="Rectangle 11">
          <path fill="#9b8c8c" d="M6.39 58.65h534.88v10.79H6.39z" />
          <path
            fill="none"
            stroke="#707070"
            d="M6.89 59.15h533.88v9.79H6.89z"
          />
        </g>
        <g data-name="Rectangle 30">
          <path fill="#675858" d="M6.39 10.61h18.48v58.83H6.39z" />
          <path
            fill="none"
            stroke="#707070"
            d="M6.89 11.11h17.48v57.83H6.89z"
          />
        </g>
        <g data-name="Rectangle 31">
          <path fill="#675858" d="M529.08 10.61h13.67v58.83h-13.67z" />
          <path
            fill="none"
            stroke="#707070"
            d="M529.58 11.11h12.67v57.83h-12.67z"
          />
        </g>
        <g data-name="Path 22-2">
          <path d="M534 64.66l-518.71-1.1 3.67-12L531.1 52z" fill="#9b8c8c" />
          <path
            d="M533.32 64.16l-2.62-11.62-511.37-.45L16 63.06l517.35 1.1m1.26 1l-520-1.12 4-13 512.91.45z"
            fill="#707070"
          />
        </g>
        <g data-name="Path 24-2">
          <path d="M534 53.87l-518.71-1.1L19 40.8l512.14.45z" fill="#9b8c8c" />
          <path
            d="M533.32 53.37l-2.62-11.62-511.37-.45L16 52.27l517.35 1.1m1.26 1l-520-1.12 4-13 512.91.45z"
            fill="#707070"
          />
        </g>
        <g data-name="Path 26-2">
          <path d="M534 43.07L15.29 42 19 30l512.14.45z" fill="#9b8c8c" />
          <path
            d="M533.32 42.57L530.7 31l-511.37-.5L16 41.47l517.35 1.1m1.26 1l-520-1.12 4-13L531.5 30z"
            fill="#707070"
          />
        </g>
        <g data-name="Path 28-2">
          <path
            d="M533.41 32.28l-517.28-1.1 3.66-12 510.78.45z"
            fill="#9b8c8c"
          />
          <path
            d="M532.79 31.78l-2.62-11.62-510-.45-3.35 11 516 1.1m1.25 1L15.46 31.67l4-13 511.54.49z"
            fill="#707070"
          />
        </g>
        <g data-name="Rectangle 12">
          <path fill="#9b8c8c" d="M.64.36h549.48v20.51H.64z" />
          <path fill="none" stroke="#707070" d="M1.14.86h548.48v19.51H1.14z" />
        </g>
        <path
          d="M0 .9l549.91.36"
          fill="none"
          stroke="#ffeadb"
          strokeWidth={1.8}
        />
        <g data-name="Rectangle 33">
          <path fill="#9b8c8c" d="M5.64 69.05h537v16h-537z" />
          <path fill="none" stroke="#707070" d="M6.14 69.55h536v15h-536z" />
        </g>
      </g>
    </svg>
  );
}
export default Drone;