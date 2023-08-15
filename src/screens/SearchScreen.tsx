import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar, FlatList } from 'react-native';
import { COLORS, SPACING } from '../theme/theme';
import { SearchBar } from 'react-native-screens';
import { baseImagePath, searchMovies } from '../api/apicalls';
import SubMovieCard from '../components/SubMovieCard';
import InputHeader from '../components/InputHeader';

const { width, height } = Dimensions.get('screen');


const SearchScreen = ({ navigation }: any) => {
    const [searchList, setSearchList] = useState<any>([[]])

    const searchMoviesFunction = async (searchDetails: string) => {
        try {
            let response = await fetch(searchMovies(searchDetails))
            let json = await response.json()
            setSearchList(json.results)
        } catch (error) {
            console.error('something went wrong with search movies function')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden />

            <View>

                <FlatList
                    data={searchList}
                    keyExtractor={(item: any) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    ListHeaderComponent={
                        <View style={styles.InputHeaderContainer}>
                            <InputHeader searchFunction={searchMoviesFunction} />
                        </View>
                    }
                    contentContainerStyle={styles.centerContainer}
                    renderItem={({ item, index }) => (
                        <SubMovieCard
                            shoudlMarginatedAtEnd={false}
                            shouldMarginatedAround={true}
                            cardFunction={() => {
                                navigation.push('MovieDetails', { movieid: item.id });
                            }}
                            cardWidth={width / 2 - SPACING.space_15 * 2}

                            title={item.original_title}
                            imagePath={baseImagePath('w342', item.poster_path)}
                        />
                    )}
                />
            </View>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Black,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        width

    },
    InputHeaderContainer: {
        marginHorizontal: SPACING.space_36,
        marginVertical: SPACING.space_28,
        marginBottom: SPACING.space_28 - SPACING.space_12,
        display: 'flex'
    },
    centerContainer: {
        alignItems: 'center'
    },
});
