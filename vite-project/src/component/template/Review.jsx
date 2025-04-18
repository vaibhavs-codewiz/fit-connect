import { Button, Card, Flex, Typography } from 'antd';
import "../../index.css";
const cardStyle = {
    width: 620,
    backgroundColor: "#1c1c1c", 
    color: "white",
    overflow: "hidden" 
};
const imgStyle = {
    display: 'block',
    width: 273,
};

const Review = () => {
    
  return (
      <div style={{ color: 'var(--text-color)' }} >
          <Card
              
              style={cardStyle}
              styles={{
                  body: {
                      padding: 0,
                      overflow: 'hidden',
                      color: 'var(--text-color)'
                    },
              }}
          >
              <Flex justify="space-between">
                  <img
                      alt="avatar"
                      src="../../../public/review-man.jpg"
                      style={imgStyle}
                  />
                  <Flex
                      vertical
                      align="flex-end"
                      justify="space-between"
                      style={{
                          padding: 32,
                      }}
                  >
                      <Typography.Title level={3}>
                          “Fit connect transform my fitness journey.”
                      </Typography.Title>
                      <Button type="primary" className='theme-button' href="" target="_blank">
                          Get Started
                      </Button>
                  </Flex>
              </Flex>
          </Card>
          
    </div>
  )
}

export default Review