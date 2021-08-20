item.cn.split("").map((item2, index) => {
  console.log(item2);
  console.log(index);
  console.log(location);
  if (index == location) {
    console.log("match found");
    return <div>5</div>;
    return <span className="sn cn hl">{item2}</span>;
  } else return <span className="sn cn hl">{item2}</span>;
});
