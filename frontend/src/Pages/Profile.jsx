import React, { useEffect, useState } from "react";
import Service from "../utils/http";
import { Center, Text, Avatar, Stack, Card } from "@mantine/core";
import { motion } from "framer-motion";

const obj = new Service();

export default function Profile() {
  const [user, setUser] = useState({});

  const getProfileData = async () => {
    try {
      let data = await obj.get("user/me");
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background:
          "linear-gradient(-45deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a6c1ee, #84fab0)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ width: "420px" }}
      >
        <Card
          shadow="xl"
          padding="xl"
          radius="lg"
          withBorder
          style={{
            background: "linear-gradient(135deg, #ffffffaa 0%, #f0f4ff 100%)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Profile Avatar */}
          <Center>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            >
              <Avatar
                src={user?.picture || "https://via.placeholder.com/150"}
                alt={user?.name}
                radius="100%"
                size={130}
                style={{
                  border: "4px solid #6c63ff",
                  boxShadow: "0px 6px 25px rgba(108,99,255,0.5)",
                }}
              />
            </motion.div>
          </Center>

          {/* User Info */}
          <Stack spacing="xs" align="center" mt="md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Text size="xl" fw={700} c="dark">
                {user?.name || "Guest User"}
              </Text>
              <Text size="sm" c="dimmed">
                User ID: {user?._id || "N/A"}
              </Text>
              <Text size="sm" c="dimmed">
                Email: {user?.email || "No email"}
              </Text>
            </motion.div>
          </Stack>
        </Card>
      </motion.div>

      {/* Gradient Background Animation CSS */}
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
}
