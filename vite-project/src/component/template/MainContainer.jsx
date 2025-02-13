import { Button } from 'antd'
const MainContainer = () => {
  return (
      <div className="h-[70%] flex flex-col items-center gap-[40px] text-center">
          <h1 className="text-[60px] font-bold text-[#bcb293]">Unleash your potential.</h1>
          <p className="text-[20px] text-[#bcb293] mt-2">Join Fit Connect to transform your journey</p>
          <div className="mt-3 flex gap-[30px]">
              <Button type="primary" size="large"
                  style={{ backgroundColor: "#bcb293" }}
              >Primary Button</Button>
              <Button size="large"
                  className="!bg-white-600 !text-black hover:!text-white !border-none hover:!bg-[#bcb293]"
              >Default Button</Button>
          </div>
      </div>
  )
}

export default MainContainer