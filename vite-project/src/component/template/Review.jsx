import { Button, Card, Flex, Typography } from 'antd';
const cardStyle = {
    width: 620,
};
const imgStyle = {
    display: 'block',
    width: 273,
};

const Review = () => {
    
  return (
    <div >
          <Card
              hoverable
              style={cardStyle}
              styles={{
                  body: {
                      padding: 0,
                      overflow: 'hidden',
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
                      <Button type="primary" href="" target="_blank">
                          Get Started
                      </Button>
                  </Flex>
              </Flex>
          </Card>
          
    </div>
  )
}

export default Review