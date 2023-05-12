import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";

export function Profile() {
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="data:image/png;base64,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"
                alt="bruce-mars"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Wells Fargo ⭐⭐⭐⭐
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  Established 1852. Re-established 2018.
                </Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    App
                  </Tab>
                  <Tab value="message">
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Message
                  </Tab>
                  <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Settings
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
              <div className="flex flex-col gap-12">
                {platformSettingsData.map(({ title, options }) => (
                  <div key={title}>
                    <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                      {title}
                    </Typography>
                    <div className="flex flex-col gap-6">
                      {options.map(({ checked, label }) => (
                        <Switch
                          key={label}
                          id={label}
                          label={label}
                          defaultChecked={checked}
                          labelProps={{
                            className: "text-sm font-normal text-blue-gray-500",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ProfileInfoCard
              title="Company Information"
              description="Wells Fargo is a financial services company that provides banking, investment, and mortgage services to individuals, businesses, and institutions."
              details={{
                "Administrator name": "Austin Andrews",
                mobile: "(44) 123 1234 123",
                email: "austin@wellsfargo.com",
                location: "USA",
                social: (
                  <div className="flex items-center gap-4">
                    <i className="fa-brands fa-facebook text-blue-700" />
                    <i className="fa-brands fa-twitter text-blue-400" />
                    <i className="fa-brands fa-instagram text-purple-500" />
                  </div>
                ),
              }}
              action={
                <Tooltip content="Edit Profile">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                </Tooltip>
              }
            />
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
              <ul className="flex flex-col gap-6">
                {conversationsData.map((props) => (
                  <MessageCard
                    key={props.name}
                    {...props}
                    action={
                      <Button variant="text" size="sm">
                        reply
                      </Button>
                    }
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Projects
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Listing of all project ventures
            </Typography>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {projectsData.map(
                ({ img, title, description, tag, route, members }) => (
                  <Card key={title} color="transparent" shadow={false}>
                    <CardHeader
                      floated={false}
                      color="gray"
                      className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                    >
                      <img
                        src={img}
                        alt={title}
                        className="h-full w-full object-cover"
                      />
                    </CardHeader>
                    <CardBody className="py-0 px-1">
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {tag}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mt-1 mb-2"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {description}
                      </Typography>
                    </CardBody>
                    <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                      <Link to={route}>
                        <Button variant="outlined" size="sm">
                          view project
                        </Button>
                      </Link>
                      <div>
                        {members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
