const VIPVerificationBadge = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      color="white"
      height="20"
      width="20"
    >
      <path
        fill="url(#abcd__6y1arw00)"
        fillRule="evenodd"
        d="M3 3h4l3-3 3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H3v-4l-3-3 3-3V3zm6.098 11.737L3.684 9.053l5.414 1.894 7.218-5.684-7.218 9.474z"
        clipRule="evenodd"
      ></path>
      <mask
        id="a__6y1arw00"
        width="20"
        height="20"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path
          fill="url(#bcd__6y1arw00)"
          fillRule="evenodd"
          d="M3 3h4l3-3 3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H3v-4l-3-3 3-3V3zm6.098 11.737L3.684 9.053l5.414 1.894 7.218-5.684-7.218 9.474z"
          clipRule="evenodd"
        ></path>
      </mask>
      <g mask="url(#a__6y1arw00)">
        <path
          fill="url(#def__6y1arw00)"
          d="M23.678-1.822C13.714-7.192 3.843-3.432.153-.881l.062 2.252C6.272 8.572 15.682 12.05 19.631 12.887c4.415-6.392 4.538-12.47 4.047-14.71z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="abcd__6y1arw00"
          x1="10"
          x2="10"
          y1="0"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFB4"></stop>
          <stop offset="1" stopColor="#F4982F"></stop>
        </linearGradient>
        <linearGradient
          id="bcd__6y1arw00"
          x1="10"
          x2="10"
          y1="0"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFB4"></stop>
          <stop offset="1" stopColor="#F4982F"></stop>
        </linearGradient>
        <linearGradient
          id="def__6y1arw00"
          x1="11.899"
          x2="12.385"
          y1="-4.538"
          y2="13.087"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stop-opacity="0"></stop>
          <stop offset="1" stopColor="#fff" stop-opacity=".35"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VIPVerificationBadge;
