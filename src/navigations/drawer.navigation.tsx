import React from "react";
import { Text, StyleSheet } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";
import { ChatScreen, MapScreen, PerfilScreen, SairScreen } from "../screens";
import DrawerNavigation from "./drawer.navigation";

const Drawer = createDrawerNavigator();

export default function HomeRoute() {
    return (
        <Drawer.Navigator
                screenOption={{
                    headerShown: true,
                    headerStyle: { backgroundColor: colors.primary},
                    headerTintColor: colors.primary,
                    drawerStyle: {
                        backgroundColor: colors.primary,
                    },
                    drawerInactiveTintColor: colors.primary,
                    drawerActiveTintColor: colors.primary,
                }}
            >
            <Drawer.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    drawerLabel: "Perfil",
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.primary} />
                    )
                }}
            />
            <Drawer.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    drawerLabel: "Chat",
                    drawerIcon: () => (
                        <Ionicons name="chatbubbles" size={24} color={colors.primary} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Mapa"
                component={MapScreen}
                options={{
                    drawerLabel: "Mapa",
                    drawerIcon: () => (
                        <Ionicons name="map" size={24} color={colors.primary} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Sair"
                component={SairScreen}
                options={{
                    drawerLabel: "Sair",
                    drawerIcon: () => (
                        <Ionicons name="exit" size={24} color={colors.primary} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}